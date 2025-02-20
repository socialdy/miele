import { Check } from "lucide-react"; 

export const AboutSection = () => {
  const benefits = [
    "Miele steht seit 1899 für höchste Qualität, die durch strenge Tests auf Langlebigkeit und Leistung geprüft wird.",
    "Unsere Geräte bieten herausragende Energieeffizienz und schonen somit Umwelt und Ressourcen.",
    "Miele-Produkte sind auf höchste Benutzerfreundlichkeit ausgelegt, mit innovativen Funktionen für maximalen Komfort.",
    "Das Design von Miele ist zeitlos und passt sich jedem Küchen- und Wohnstil an.",
    "Unser erstklassiger Kundenservice sorgt für eine sorgenfreie Nutzung und schnelle Hilfe bei Bedarf.",
    "Miele bietet eine lange Lebensdauer, was es zu einer lohnenden Investition für das Leben macht.",
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <iframe
              width="100%"
              height="370"
              src="https://www.youtube.com/embed/CwRfzNMcZwY"
              title="Miele Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="animate-fade-in">
            <h2 className="text-white mb-12">
              Warum Miele wählen?
            </h2>
            <p className="text-white mb-8">
              Miele steht seit über 120 Jahren für Innovation und Qualität. Jedes Produkt wird mit dem Ziel entwickelt, die Erwartungen seiner Kunden zu übertreffen und gleichzeitig die Umwelt zu schonen.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="text-white" />
                  <span className="text-white">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
