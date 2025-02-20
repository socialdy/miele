import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center xl:p-10"
      style={{
        backgroundImage: "url('images/miele_bg.jpg')",  // Ersetze dies mit dem tatsächlichen Miele-Bild
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content (Centered Text) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <div className="max-w-7xl text-center px-4 sm:px-6 lg:px-8">
        <h1 className="mb-5">
  Miele – Ihr Premium-Partner für Haushaltsgeräte im Küchenstudio Bergheim, Salzburg
</h1>

<p className="mb-6">
  Willkommen bei Miele, dem weltweit führenden Anbieter von hochwertigen Haushaltsgeräten. Als exklusiver Partner des Küchenstudio Bergheim in Salzburg bieten wir Ihnen innovative und zuverlässige Miele-Produkte, die Ihre Küche auf höchstem Niveau bereichern. Ob Kochfeld, Backofen oder Geschirrspüler – bei uns finden Sie die besten Geräte, die für Langlebigkeit und herausragende Leistung bekannt sind.
</p>

          <a href="/#beratung">
          <Button className="bg-[#f59b00] text-black py-2 px-4 rounded-full text-xs uppercase no-underline hover:bg-[#f59b00]">
  Beratungstermin buchen
</Button>

          </a>
        </div>
      </div>
    </section>
  );
};
