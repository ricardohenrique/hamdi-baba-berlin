import { useLang } from "@/i18n/LanguageContext";
import { Phone, Navigation, ShoppingBag } from "lucide-react";

const MobileCTA = () => {
  const { t } = useLang();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-warm-dark/95 backdrop-blur-sm border-t border-primary/20 safe-area-pb">
      <div className="grid grid-cols-3 divide-x divide-primary/20">
        <a href="tel:+491634506893" className="flex flex-col items-center gap-1 py-3 text-sand hover:text-primary transition-colors">
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">{t.mobileCta.call}</span>
        </a>
        <a href="https://maps.google.com/?q=Prinzenallee+1A,+13357+Berlin" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-3 text-sand hover:text-primary transition-colors">
          <Navigation className="w-5 h-5" />
          <span className="text-xs font-medium">{t.mobileCta.directions}</span>
        </a>
        <a href="https://louqa.pw/hamdi-baba-wedding-7-4u5ai" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-3 text-primary">
          <ShoppingBag className="w-5 h-5" />
          <span className="text-xs font-semibold">{t.mobileCta.order}</span>
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
