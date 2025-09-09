import { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className="relative max-w-3xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        src="/demo-video.mp4"   // put your video in /public/demo-video.mp4
        className="w-full h-auto"
        controls={playing}      // controls only appear after clicking play
      />
      {!playing && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
        >
          <Play className="w-20 h-20 text-white drop-shadow-lg" />
        </button>
      )}
    </div>
  );
}
