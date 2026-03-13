import { useLang } from "@/i18n/LanguageContext";
import interiorImg from "@/assets/gallery-interior.jpg";

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">{t.about.label}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">{t.about.title}</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">{t.about.p1}</p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{t.about.p2}</p>
          </div>
          <div className="relative">
            <img src={interiorImg} alt="Hamdi Baba restaurant interior" className="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground font-display text-lg font-bold px-6 py-3 rounded-lg shadow-lg">
              Berlin-Wedding
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
