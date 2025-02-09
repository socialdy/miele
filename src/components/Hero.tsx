import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center xl:p-10">
      {/* Container for the video */}
      <div className="relative w-full h-full max-w-full overflow-hidden">
        {/* Desktop Video */}
        <video
          className="w-full h-full object-cover ease-in-out hidden md:block"
          autoPlay
          muted
          loop
        >
          <source
            src="https://mgstaps.com/wp-content/uploads/2023/09/MGS_loop_A_no%20zoom%2003_low.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video */}
        <video
          className="w-full h-full object-cover ease-in-out md:hidden"
          autoPlay
          muted
          loop
        >
          <source
            src="https://mgstaps.com/wp-content/uploads/2023/11/MGS%20mobile_loop_A_no%20zoom%2003.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content (Centered Text) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <div className="max-w-7xl text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 uppercase">
            Exklusive Armaturen für Küche & Bad
          </h1>

          <p className="text-lg md:text-xl text-gray-200 font-bold mb-6">
            Entdecken Sie die einzigartige Kombination aus italienischem Design und Schweizer Ingenieurkunst mit den MGS-Armaturen.<br />
            Eleganz, Präzision und Innovation für Ihre luxuriöse Küche und Badgestaltung im Küchenstudio Bergheim.
          </p>

          <a href="/#beratung">
            <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 mt-9">
              Beratungstermin buchen
            </Button>
          </a>
        </div>

        {/* Hero Text (MGLabs) */}
        <div className="absolute bottom-8 right-16 text-white text-8xl font-bold opacity-20 uppercase tracking-widest">
          <h2>MGLabs</h2>
        </div>
      </div>
    </section>
  );
};
