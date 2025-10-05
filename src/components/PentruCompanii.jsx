import React from "react";
import HorizontalSection from "../ui/pentru companii/HorizontalSection";
import PlantSection from "../ui/pentru companii/PlantSection";
import SolutionsSection from "../ui/pentru companii/SolutionsSection";

const PentruCompanii = () => {
  const hs_text = {
    section1: {
      img: "/pentru_companii/phone+laptop.png",
      title1: "Transformă deratizarea",
      title2: "într-un proces eficient",
      text: "Ai control total asupra capcanelor și verificărilor. Vizualizează și gestionează locațiile direct pe hartă, urmărește istoricul intervențiilor și statusul fiecărei capcane, identifică zonele cu risc ridicat pentru a interveni rapid și accesează platforma de pe web sau mobil pentru actualizări în timp real.",
    },
    section2: {
      img: "/pentru_companii/desktop.svg",
      title1: "Management digital pentru",
      title2: "deratizare eficientă",
      text: "Ține sub control problema rozătoarelor printr-un proces intuitiv și optimizat. Monitorizează capcanele și intervențiile în timp real, primește notificări automate pentru verificări și reumpleri, analizează date și rapoarte pentru a lua decizii informate și organizează eficient echipa, distribuind rapid sarcinile.",
    },
  };

  return (
    <section id="companii" className="w-full mb-20 md:mb-28 lg:mb-37.5">
      <HorizontalSection object={hs_text.section1} parity="odd" />
      <PlantSection />
      <SolutionsSection />
      <HorizontalSection object={hs_text.section2} parity="even" />
    </section>
  );
};

export default PentruCompanii;
