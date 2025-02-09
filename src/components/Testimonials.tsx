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
      name: "Stefan Müller",
      role: "Privatkunde",
      quote: "Die Armatur 'Spin SQ' hat unsere Küche perfekt ergänzt. Der schwenkbare Auslauf ist nicht nur praktisch, sondern sieht auch noch richtig edel aus. Sehr zufrieden mit dem Design und der Funktionalität!",
    },
    {
      id: 2,
      name: "Laura Schmitt",
      role: "Immobilienentwicklerin",
      quote: "'F2 SCS' Armaturen haben wir in unseren neuen Luxuswohnungen verbaut. Sie passen perfekt zum modernen Design und sind dabei noch extrem langlebig und umweltfreundlich – absolut empfehlenswert.",
    },
    {
      id: 3,
      name: "Janine Becker",
      role: "Innenarchitektin",
      quote: "Die Edelstahlarmaturen von 'Nemo RH' bringen eine elegante, aber schlichte Ästhetik in jedes Badezimmer. Besonders schätze ich die hohe Funktionalität und die einfache Handhabung im Alltag.",
    },
    {
      id: 4,
      name: "Maximilian Schwarz",
      role: "Restaurantbesitzer",
      quote: "Wir haben in unserem Restaurant 'Vela LD' Armaturen installiert, und die Handbrause hat sich als äußerst praktisch erwiesen. Der Umstellmechanismus zwischen normalem Wasserfluss und Spray ist einfach genial für die Küche.",
    },
  ];

  return (
<section className="py-20 bg-[#61756a] text-white" id="referenzen">
  <div className="container max-w-6xl mx-auto px-4">
  <h2 className="text-5xl font-light  text-white text-center mb-12 uppercase">Referenzen</h2>
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
