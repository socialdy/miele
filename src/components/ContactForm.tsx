/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const ContactForm = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" }); // Namespace auf 30min geändert
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#1E1E1E" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="py-20 bg-black" id="beratung">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="t text-white mb-4">Buchen Sie jetzt Ihren Termin!</h2>
          <p className="text-white mb-7">
            Lassen Sie uns Ihre Traumküche planen! Füllen Sie das Formular aus und buchen Sie einen Termin, der Ihnen passt.
          </p>
          <Cal
            namespace="30min" // Namespace auf 30min geändert
            calLink="kuechenstudiobergheim/30min" // calLink auf 30min geändert
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          ></Cal>
        </div>
      </div>
    </section>
  );
};
