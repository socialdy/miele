import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "H 7260 B Edelstahl/CleanSteel",
    image: "/images/H7260.png",
    description: "Im perfekt kombinierbaren Design mit Klartextdisplay und PerfectClean.",
  },
  {
    id: 2,
    name: "G 7131 SCi AD 125 Edition CleanSteel Front",
    image: "/images/G7131SCiAD.png",
    description: "mit automatischer Dosierung dank AutoDos mit integrierter PowerDisk.",
  },
  {
    id: 3,
    name: "FNS 4382 D Edelstahllook",
    image: "/images/FNS4382D.png",
    description: "mit NoFrost und SideOpen für eine komfortable Side-by-Side Kombination.",
  },
  {
    id: 4,
    name: "K 7348 C 125 Gala Ed",
    image: "/images/K7348C125.png",
    description: "mit PerfectFresh Pro für längere Frische und integriertem 4*-Gefrierfach.",
  },
  {
    id: 5,
    name: "CM 7750 CoffeeSelect Obsidianschwarz",
    image: "/images/CM7750.png",
    description: "mit CoffeeSelect und AutoDescale für größte Flexibilität",
  },
  {
    id: 6,
    name: "CM 5510 125 Edition Obsidianschwarz matt",
    image: "/images/CM5510.png",
    description: "mit OneTouch for Two-Zubereitung für höchsten Kaffeegenuss. ",
  },
  {
    id: 7,
    name: "Triflex HX2 125 Gala Edition Obsidianschwarz",
    image: "/images/TriflexHX2125.png",
    description: "Triflex HX2 mit 3in1-Design für außergewöhnliche Flexibilität",
  },
  {
    id: 8,
    name: "Duoflex HX1 Nordicblau",
    image: "/images/DuoflexHX1.png",
    description: "Hohe Saugkraft | automatische Leistungsanpassung | Gerätemodifikation | Nordicblau",
  },
  {
    id: 9,
    name: "TWC220WP 8kg Lotosweiß",
    image: "/images/TWC220WP.png",
    description: "8 kg | DirectSensor | EcoDry-Technologie | FragranceDos | PerfectDry",
  },
  {
    id: 10,
    name: "TWL680WP 125 Gala Edition Lotosweiß",
    image: "/images/TWL680WP.png",
    description: "9 kg | ComfortSensor | SteamCare | SilenceDrum | DryCare 40",
  },
  {
    id: 11,
    name: "WWB380 WCS 125 Edition Lotosweiß",
    image: "/images/WWB380.png",
    description: "A-20%* | 8 kg | 1400 U/min | SteamCare | QuickPowerWash | Miele@home",
  },
  {
    id: 12,
    name: "WCI880 WPS 125 Gala Edition Lotosweiß",
    image: "/images/WCI880.png",
    description: "A | 9 kg | 1600 U/min | SteamCare | Automatische Dosierung | QuickPowerWash",
  },
];




export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 2;

  const next = () => {
    setCurrentIndex((current) => 
      (current + slidesPerView >= products.length ? 0 : current + slidesPerView)
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      (current - slidesPerView < 0 ? Math.max(0, products.length - slidesPerView) : current - slidesPerView)
    );
  };

  return (
    <section className="py-20 bg-black" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className=" text-center text-white mb-12 ">Produkte</h2>
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
                  <div className=" shadow-lg">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full; height;"
                    />
                    <div className="p-6 md:p-8 text-center">
                      <h3 className="text-white mb-2">{product.name}</h3>
                      <p className="text-white mb-4">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};