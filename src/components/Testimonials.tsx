import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Clara Wagner",
      role: "Ernährungsberaterin",
      quote: "Der H 7260 Geschirrspüler von Miele hat mich überzeugt. Das Klartextdisplay macht die Bedienung kinderleicht, und mit PerfectClean ist der Geschirrspüler immer schnell und gründlich sauber – perfekt für meinen hektischen Alltag.",
    },
    {
      id: 2,
      name: "Jonas Richter",
      role: "Bauunternehmer",
      quote: "Die G 7131 SCi Spülmaschine ist ein echter Zeit- und Energiesparer. Die AutoDos-Funktion macht das Dosieren so einfach und gleichzeitig umweltfreundlich. Ein echtes Highlight für jeden, der auf Effizienz und Nachhaltigkeit setzt.",
    },
    {
      id: 3,
      name: "Sophie Keller",
      role: "Freiberufliche Fotografin",
      quote: "Der FNS 4382 Gefrierschrank von Miele ist eine wahre Bereicherung für mein Studio. Dank NoFrost muss ich nie wieder abtauen, und die SideOpen-Tür erleichtert den Zugriff auf das Gefriergut – unglaublich praktisch!",
    },
    {
      id: 4,
      name: "Maximilian Braun",
      role: "Restaurantbesitzer",
      quote: "Der CM 7750 Kaffeevollautomat liefert meinen Gästen immer den perfekten Kaffee. Mit der CoffeeSelect-Funktion kann ich ganz einfach verschiedene Kaffeespezialitäten zubereiten – das perfekte Gerät für unser Café.",
    },
  ];

  return (
<section className="py-20 bg-black text-white" id="referenzen">
  <div className="container max-w-6xl mx-auto px-4">
  <h2 className=" text-white text-center mb-12">Referenzen</h2>
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto relative"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="bg-white/10 p-8 h-full animate-fade-in">
              <div className="flex flex-col h-full justify-between">
                <p className="text-lg mb-8 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-200">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Pfeile werden auf Mobile und Tablet ausgeblendet */}
      <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hover:bg-white/20 text-black" />
      <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hover:bg-white/20 text-black" />
    </Carousel>
  </div>
</section>


  );
};
