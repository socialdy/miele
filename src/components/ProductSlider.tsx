import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "Nemo RH",
    image: "/images/nemo_rh.jpg",
    description: "Schlichte Armatur mit elegantem Design, perfekt für moderne Küchen und Bars. Einfache Wasserfluss- und Temperaturregulierung mit einer Hand.",
  },
  {
    id: 2,
    name: "F2 SCS",
    image: "/images/f2_scs.jpg",
    description: "Zweiloch-Armatur aus Edelstahl AISI316L in Marinequalität. 100 % bleifrei, vollständig recycelbar. Flexibel platzierbar und handpoliert.",
  },
  {
    id: 3,
    name: "Spin SQ",
    image: "/images/spin_sq.jpg",
    description: "Eleganter Küchenmischer aus hochwertigem Edelstahl. Schwenkbarer Auslauf, ideal für kleine Spülen.",
  },
  {
    id: 4,
    name: "Spin PF",
    image: "/images/spin_pf.jpg",
    description: "Kaltwasser-Wandhahn aus Edelstahl AISI316L, mit doppeltem schwenkbarem Auslauf. Unterputzinstallation möglich.",
  },
  {
    id: 5,
    name: "Vela LD",
    image: "/images/vela_ld.jpg",
    description: "Semiprofessionelle Armatur mit Handbrause. Ideal für große Spülbecken und Kücheninseln. Umstellbar von normal auf Spray.",
  },
  {
    id: 6,
    name: "MB297",
    image: "/images/mb297.jpg",
    description: "Zweiloch-Wandarmatur mit elegantem Auslauf aus Edelstahl AISI316L. Handpoliert für matte oder polierte Oberflächen.",
  },
  {
    id: 7,
    name: "MB516",
    image: "/images/mb516.jpg",
    description: "Bodenmontierter Badewannenfüller aus Edelstahl AISI316L, handpoliert auf mattes oder glänzendes Finish.",
  },
  {
    id: 8,
    name: "SO608",
    image: "/images/so608.jpg",
    description: "Großer, quadratischer Duschkopf aus hochwertigem Edelstahl für ein Regenerlebnis. Erhältlich in mattem oder poliertem Finish.",
  },
  {
    id: 9,
    name: "SO614",
    image: "/images/so614.jpg",
    description: "Multifunktions-Deckenduschkopf mit drei Wasserstrahlarten und Chromotherapie-Funktion für ein Spa-Erlebnis zu Hause.",
  },
  {
    id: 10,
    name: "AC918",
    image: "/images/ac918.jpg",
    description: "Spülplatte kompatibel mit Geberit Sigma 8 cm und 12 cm Spülsystemen. Handpoliert mit mattem oder glänzendem Edelstahl-Finish.",
  },
  {
    id: 11,
    name: "MB441",
    image: "/images/mb441.jpg",
    description: "Thermostatisches Duschventil aus Edelstahl AISI316L mit Zwei-Wege-Mengenregelung. Erhältlich in verschiedenen Oberflächen wie Black Steel und Titanium.",
  },
  {
    id: 12,
    name: "E455 – PE456",
    image: "/images/e455_pe456.jpg",
    description: "Horizontales thermostatisches Duschventil mit Handbrausehalterung. Ermöglicht die Steuerung von Handbrause und zusätzlichem Wasserauslass.",
  },
  {
    id: 13,
    name: "ER516",
    image: "/images/er516.jpg",
    description: "Bodenmontierter Badewannenfüller mit Handbrause. Aus Edelstahl AISI316L, handpoliert auf mattes oder glänzendes Finish.",
  },
  {
    id: 14,
    name: "AC978",
    image: "/images/ac978.jpg",
    description: "Badewannenauslauf für Deckmontage aus Edelstahl. Maximiert den Wasserfluss zum Befüllen der Badewanne. Erhältlich in mattem oder poliertem Edelstahl.",
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
    <section className="py-20 bg-white" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-5xl font-light text-center text-[#61756a] mb-12 uppercase">Produkte</h2>
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
                  <div className="bg-white shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className=""
                    />
                    <div className="p-6 md:p-8 text-center">
                      <h3 className="text-2xl uppercase text-[#2c2c2e] font-[500] md:text-3xl mb-2">{product.name}</h3>
                      <p className="text[#2c2c2e] mb-4">{product.description}</p>
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