import { useEffect } from "react";

export default function ImageModal({
  images,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  if (currentIndex === null) return null;

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard support (optional but professional)
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

      {/* Close Button */}
      <button
        className="absolute top-6 right-6 text-white text-3xl"
        onClick={onClose}
      >
        ✕
      </button>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute left-6 text-white text-4xl bg-black/40 px-4 py-2 rounded-full hover:bg-black/70 transition"
      >
        ❮
      </button>

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="Zoomed"
        className="max-h-[85vh] max-w-[85vw] rounded-lg shadow-2xl"
      />

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute right-6 text-white text-4xl bg-black/40 px-4 py-2 rounded-full hover:bg-black/70 transition"
      >
        ❯
      </button>

    </div>
  );
}