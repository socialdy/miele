import { Check } from "lucide-react"; 

export const AboutSection = () => {
  const benefits = [
    "Perfekte Mischung aus Schweizer Technik und italienischem Design für außergewöhnliche Armaturen.",
    "100% bleifrei und vollständig recycelbar, mit etwa 60% recycelten Materialien.",
    "Polierte Edelstahloberfläche sorgt für Langlebigkeit, Kratzfestigkeit und Hygiene.",
    "Ideal für Küche, Bad und Außeneinrichtungen aufgrund der oxidationsbeständigen Eigenschaften.",
    "Erfüllt die höchsten Standards und ist der erste europäische Hersteller mit NSF61 Annex G Zertifizierung.",
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <a href="https://www.mgstaps.com">
              <img
                src="/images/mgs_about.jpg"
                alt="MGS Taps Logo"
                className="shadow-xl h-full w-full"
              />
            </a>
          </div>
          <div className="animate-fade-in">
          <h2 className="text-5xl font-light  text-[#61756a] mb-12 uppercase">Warum MGS Armaturen wählen?</h2>
            <p className="text-[#2c2c2e] mb-8">
              MGS Armaturen vereinen die präzise Schweizer Ingenieurskunst mit dem exklusiven italienischen Design, um moderne und funktionale Kunstwerke zu schaffen, die perfekt in die exklusivsten Häuser der Welt passen.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="text-[#2c2c2e]" />
                  <span className="text-[#2c2c2e]">{benefit}</span>
                </li>
              ))}
            </ul>
            
          </div>
        </div>

      </div>

    </section>
  );
};
