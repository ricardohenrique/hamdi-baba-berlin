import { useLang } from "@/i18n/LanguageContext";
import { Phone, MapPin, ShoppingBag, Star, Clock, BadgeEuro } from "lucide-react";
import heroImg from "@/assets/hero-food.jpg";

const Hero = () => {
  const { t } = useLang();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <img src={heroImg} alt="Authentic Turkish kebab platter at Hamdi Baba" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 container text-center py-32 px-4">
        <p className="text-primary font-body text-sm uppercase tracking-[0.25em] mb-4">Restaurant Hamdi Baba</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-sand leading-tight mb-6 max-w-4xl mx-auto">
          {t.hero.headline}
        </h1>
        <p className="text-sand/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body">
          {t.hero.subheadline}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="inline-flex items-center gap-1.5 bg-primary/20 border border-primary/30 text-sand text-sm px-4 py-2 rounded-full">
            <Star className="w-4 h-4 text-primary fill-primary" /> {t.hero.rating}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-primary/20 border border-primary/30 text-sand text-sm px-4 py-2 rounded-full">
            <BadgeEuro className="w-4 h-4 text-primary" /> {t.hero.priceRange}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-primary/20 border border-primary/30 text-sand text-sm px-4 py-2 rounded-full">
            <Clock className="w-4 h-4 text-primary" /> {t.hero.openDaily}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+491634506893" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-colors text-base">
            <Phone className="w-5 h-5" /> {t.hero.callNow}
          </a>
          <a href="https://maps.google.com/?q=Prinzenallee+1A,+13357+Berlin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-sand/40 text-sand hover:bg-sand/10 font-semibold px-8 py-4 rounded-lg transition-colors text-base">
            <MapPin className="w-5 h-5" /> {t.hero.directions}
          </a>
          <a href="https://louqa.pw/hamdi-baba-wedding-7-4u5ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-sand/40 text-sand hover:bg-sand/10 font-semibold px-8 py-4 rounded-lg transition-colors text-base">
            <ShoppingBag className="w-5 h-5" /> {t.hero.orderNow}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
