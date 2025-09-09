import { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    const el = videoRef.current;
    if (el) {
      el.play().catch(() => {
        // If autoplay with user gesture still fails, keep controls visible
      });
    }
  }

  return (
    <div className="relative max-w-3xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        className="w-full h-auto"
        controls
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {/* Prefer an H.264 encode if present (add to /public) */}
        <source src="/demo-video-h264.mp4" type='video/mp4; codecs="avc1.640028, mp4a.40.2"' />
        {/* WebM/VP9 fallback (optional, add if available) */}
        <source src="/demo-video-vp9.webm" type="video/webm" />
        {/* Current file as last resort */}
        <source src="/demo-video.mp4" type="video/mp4" />
        Sorry, your browser doesn’t support embedded videos.
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
    </div>
  );
}
