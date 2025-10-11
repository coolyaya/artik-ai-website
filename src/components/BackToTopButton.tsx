import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SCROLL_OFFSET = 600;

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_OFFSET);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-black/70 text-white shadow-lg transition hover:-translate-y-1 hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
