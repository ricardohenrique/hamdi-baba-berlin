import { useLang } from "@/i18n/LanguageContext";
import { MapPin, Clock, Car, Baby, CreditCard, Users, Navigation } from "lucide-react";

const VisitUs = () => {
  const { t } = useLang();
  const mapUrl = "https://maps.google.com/?q=Prinzenallee+1A,+13357+Berlin";

  return (
    <section id="visit" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">{t.visitUs.label}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">{t.visitUs.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <div className="space-y-5">
            {[
              { icon: MapPin, text: t.visitUs.address },
              { icon: Clock, text: `${t.visitUs.hours} — ${t.visitUs.hoursNote}` },
              { icon: Car, text: t.visitUs.parking },
              { icon: Baby, text: t.visitUs.kids },
              { icon: CreditCard, text: t.visitUs.payments },
              { icon: Users, text: t.visitUs.noReservations },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-primary/10 p-2.5 rounded-lg shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-base">{text}</p>
              </div>
            ))}
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors mt-4">
              <Navigation className="w-5 h-5" /> {t.visitUs.getDirections}
            </a>
          </div>
          {/* Map embed */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-border aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.5!2d13.388!3d52.552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUHJpbnplbmFsbGVlIDFBLCAxMzM1NyBCZXJsaW4!5e0!3m2!1sen!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hamdi Baba location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
