import { useLang } from "@/i18n/LanguageContext";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-warm-dark">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">{t.reviews.label}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-sand mb-4">{t.reviews.title}</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-primary fill-primary" />
            ))}
          </div>
          <p className="text-sand font-display text-2xl font-bold">{t.reviews.rating}</p>
          <p className="text-sand/60 text-sm mt-1">{t.reviews.count}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.reviews.placeholders.map((review, i) => (
            <div key={i} className="bg-charcoal/50 border border-primary/10 rounded-xl p-6 relative">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-sand/80 text-base italic leading-relaxed mb-4">"{review.text}"</p>
              <p className="text-sand/40 text-xs uppercase tracking-wider">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
