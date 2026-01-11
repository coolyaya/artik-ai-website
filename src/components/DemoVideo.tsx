import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState<{ w: number; h: number } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    setShouldLoad(true);
    setControlsVisible(true);
    requestAnimationFrame(() => {
      const el = videoRef.current;
      if (!el) return;
      el.play().catch(() => {
        // keep controls visible even if play fails
      });
    });
  }

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 block w-full h-full mx-auto"
        controls={controlsVisible}
        poster="/thumbnail.webp"
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onLoadedMetadata={() => {
          const el = videoRef.current;
          if (!el) return;
          const w = el.videoWidth;
          const h = el.videoHeight;
          setDimensions({ w, h });
          if (!w || !h) {
            setErrorMsg(
              "Video track appears unsupported by this browser. Please use an H.264 (yuv420p) MP4 or VP9 WebM."
            );
          }
        }}
        onError={() => {
          const el = videoRef.current;
          const code = (el?.error && (el.error as MediaError)?.code) || "";
          setErrorMsg(`Unable to play this file${code ? ` (error ${code})` : ""}. Try an H.264 (yuv420p) MP4.`);
        }}
      >
        {shouldLoad ? (
          <>
            <source src="/demo-video-vp9.webm" type="video/webm" />
            <source src="/demo-video-h264.mp4" type='video/mp4; codecs="avc1.640028, mp4a.40.2"' />
            <source src="/demo-video.mp4" type="video/mp4" />
          </>
        ) : null}
        Sorry, your browser doesn't support embedded videos.
      </video>

      {!playing && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
          aria-label="Play demo video"
        >
          <Play className="w-20 h-20 text-white drop-shadow-lg" />
        </button>
      )}

      {errorMsg && (
        <div className="absolute bottom-0 left-0 right-0 p-3 text-sm bg-red-600/80 text-white">
          {errorMsg}
          {dimensions ? ` (reported ${dimensions.w}x${dimensions.h})` : null}
        </div>
      )}
    </>
  );
}
