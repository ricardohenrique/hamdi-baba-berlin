import { useLang } from "@/i18n/LanguageContext";
import { UtensilsCrossed, ShoppingBag, Truck, Zap, Moon } from "lucide-react";

const icons = [UtensilsCrossed, ShoppingBag, Truck, Zap, Moon];

const Services = () => {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">{t.services.label}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">{t.services.title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-lg transition-all">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
