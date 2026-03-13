import { useLang } from "@/i18n/LanguageContext";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer id="contact" className="py-16 bg-charcoal border-t border-primary/10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-sand mb-3">Hamdi Baba</h3>
            <p className="text-sand/60 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>
          {/* Quick actions */}
          <div className="space-y-4">
            <a href="tel:+491634506893" className="flex items-center gap-3 text-sand/80 hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" /> {t.footer.callUs}: +49 163 4506893
            </a>
            <a href="https://maps.google.com/?q=Prinzenallee+1A,+13357+Berlin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sand/80 hover:text-primary transition-colors">
              <MapPin className="w-5 h-5 text-primary" /> {t.footer.address}
            </a>
            <div className="flex items-center gap-3 text-sand/80">
              <Clock className="w-5 h-5 text-primary" /> {t.footer.hoursValue}
            </div>
          </div>
          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a href="tel:+491634506893" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> {t.footer.callUs}
            </a>
            <a href="https://maps.google.com/?q=Prinzenallee+1A,+13357+Berlin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-sand/20 text-sand hover:bg-sand/10 font-semibold px-6 py-3 rounded-lg transition-colors">
              <MapPin className="w-4 h-4" /> {t.footer.directions}
            </a>
          </div>
        </div>
        <div className="border-t border-sand/10 pt-6 text-center">
          <p className="text-sand/40 text-sm">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
