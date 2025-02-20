import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black  py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
          <a href="https://kuechenstudio-bergheim.at" className="">
            <img
              src="/images/me_logo.png" // Ersetze dies durch den tatsächlichen Pfad zu deinem Logo
              alt="Küchenstudio Bergheim Logo"
              className="h-16 mb-3" // Passe die Größe des Logos an
            />
          </a>
            <p className="text-gray-200">
            Hochwertige Einbauküchen von Beeck, innovative Küchengeräte von Miele sowie exklusive Arbeitsplatten und stilvolle Ausstattung – alles für Ihre Traumküche.
            </p>
          </div>
          <div>
            <h4 className="text-lg text-white mb-4">Quicklinks</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://kuechenstudio-bergheim.at/kuechen" className="text-gray-200 hover:text-white transition-colors">
                  Küchen
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at/abverkauf" className="text-gray-200 hover:text-white transition-colors">
                  Abverkauf
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at/ausstattung" className="text-gray-200 hover:text-white transition-colors">
                  Ausstattung
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at/bad" className="text-gray-200 hover:text-white transition-colors">
                  Bad
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-white  mb-4">Kontakt</h4>
            <ul className="space-y-3 text-gray-200">
              <li>Lamprechtshausener Bundesstraße 1</li>
              <li>5101 Bergheim</li>
              <li><a href="tel:+43 662 452535" className="text-gray-200 hover:text-white transition-colors">+43 662 452535</a></li>
              <li>
                <a href="mailto:me@kuechenstudio-bergheim.at" className="text-gray-200 hover:text-white transition-colors">
                  me@kuechenstudio-bergheim.at
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at" className="text-gray-200 hover:text-white transition-colors">
                www.kuechenstudio-bergheim.at
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-white  mb-4">Öffnungszeiten</h4>
            <ul className="space-y-3 text-gray-200">
              <li>Mo – Fr: 10:00 – 17:00 Uhr</li>
              <li>Sa – So: Geschlossen</li>
            </ul>
          </div>
        </div>

        {/* Rechtliche Links */}
        <div className="mt-16 pt-8 border-t border-white/90 text-center text-gray-200">
          <ul className="space-y-3">
            <li>
              <a href="https://kuechenstudio-bergheim.at/impressum" className="text-gray-200 hover:text-white transition-colors">
                Impressum
              </a>
            </li>
            <li>
              <a href="https://kuechenstudio-bergheim.at/datenschutz" className="text-gray-200 hover:text-white transition-colors">
                Datenschutz
              </a>
            </li>
            <li>
              <a href="https://kuechenstudio-bergheim.at/agb" className="text-gray-200 hover:text-white transition-colors">
                AGB
              </a>
            </li>
          </ul>
          <p className="mt-6">© 2025 Küchenstudio Bergheim. Alle Rechte vorbehalten.</p>
          <p className="text-sm mt-2">Developed by <a className="font-semibold" href="https://socialdynamics.agency">Social Dynamics</a></p>
        </div>
      </div>
    </footer>
  );
};
