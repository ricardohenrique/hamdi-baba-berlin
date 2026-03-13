import { useLang } from "@/i18n/LanguageContext";
import { useState } from "react";
import { X } from "lucide-react";
import img1 from "@/assets/hero-food.jpg";
import img2 from "@/assets/gallery-kebab.jpg";
import img3 from "@/assets/gallery-wrap.jpg";
import img4 from "@/assets/gallery-plate.jpg";
import img5 from "@/assets/gallery-interior.jpg";
import img6 from "@/assets/gallery-grill.jpg";

const images = [
  { src: img1, alt: "Turkish kebab platter" },
  { src: img2, alt: "Grilled kebab skewers" },
  { src: img3, alt: "Turkish wrap" },
  { src: img4, alt: "Turkish plate with rice" },
  { src: img5, alt: "Restaurant interior" },
  { src: img6, alt: "Charcoal grill" },
];

const Gallery = () => {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-warm-dark">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">{t.gallery.label}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-sand">{t.gallery.title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <button key={i} onClick={() => setLightbox(i)} className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/30 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-warm-dark/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-sand hover:text-primary">
            <X className="w-8 h-8" />
          </button>
          <img src={images[lightbox].src} alt={images[lightbox].alt} className="max-w-full max-h-[85vh] object-contain rounded-lg" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
