import { useLang } from "@/i18n/LanguageContext";
import { Star, BadgeEuro, Clock, Truck, User, GraduationCap } from "lucide-react";

const icons = [Star, BadgeEuro, Clock, Truck, User, GraduationCap];

const WhyChoose = () => {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-warm-dark">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">{t.why.label}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-sand">{t.why.title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-charcoal/50 border border-primary/10 rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-sand mb-1">{item.title}</h3>
                <p className="text-sand/60 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
