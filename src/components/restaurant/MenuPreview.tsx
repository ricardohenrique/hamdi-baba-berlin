import { useLang } from "@/i18n/LanguageContext";
import { Flame, CircleDot, Sandwich, UtensilsCrossed, Salad, CupSoda } from "lucide-react";
import grillImg from "@/assets/gallery-grill.jpg";
import kebabImg from "@/assets/gallery-kebab.jpg";
import wrapImg from "@/assets/gallery-wrap.jpg";
import plateImg from "@/assets/gallery-plate.jpg";

const categoryIcons = [Flame, CircleDot, Sandwich, UtensilsCrossed, Salad, CupSoda];
const categoryImages = [grillImg, kebabImg, wrapImg, plateImg, null, null];

const MenuPreview = () => {
  const { t } = useLang();

  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">{t.menuSection.label}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">{t.menuSection.title}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t.menuSection.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {t.menuSection.categories.map((cat, i) => {
            const Icon = categoryIcons[i];
            const img = categoryImages[i];
            return (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-square bg-card border border-border hover:border-primary/40 transition-all cursor-pointer">
                {img ? (
                  <>
                    <img src={img} alt={cat} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-warm-dark/60 group-hover:bg-warm-dark/50 transition-colors" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-card flex items-center justify-center">
                    <Icon className="w-12 h-12 text-border" />
                  </div>
                )}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
                  <Icon className={`w-8 h-8 mb-3 ${img ? 'text-primary' : 'text-primary'}`} />
                  <h3 className={`font-display text-xl font-bold ${img ? 'text-sand' : 'text-foreground'}`}>{cat}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <a href="https://louqa.pw/hamdi-baba-wedding-7-4u5ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
            {t.menuSection.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
