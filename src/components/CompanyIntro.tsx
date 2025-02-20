export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-black" id="ueber-miele">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">

          <img 
            src="/images/miele.png" 
            alt="Miele Logo" 
            className="h-24 w-auto"
          />
          
        </div>

        <div className="mt-6 text-center">
        <p className="text-white leading-relaxed mb-6">
          Miele steht seit 1899 für Innovation und herausragende Qualität im Bereich hochwertiger Haushaltsgeräte. Mit einer breiten Palette von Geräten, die von Kochfeldern über Backöfen bis hin zu Wäschepflegeprodukten reichen, setzt Miele Maßstäbe in Langlebigkeit, Energieeffizienz und Nachhaltigkeit. Vertrauen Sie auf Miele – ein Markenzeichen für Geräte, die Sie ein Leben lang begleiten werden.
        </p>
        </div>
      </div>
    </section>
  );
};
