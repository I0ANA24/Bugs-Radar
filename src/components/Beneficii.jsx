import React from "react";
import Img_and_text from "../ui/beneficii/Img_and_text";
import Img1 from "../ui/beneficii/Img1";
import Img2 from "../ui/beneficii/Img2";
import Img3 from "../ui/beneficii/Img3";
import Img4 from "../ui/beneficii/Img4";

const Beneficii = () => {
  const text = {
    img1: {
      title: "Plasează capcanele pe hartă",
      subtitle:
        "Creează o hartă digitală a locației tale și pune capcanele în mod strategic. Angajații pot vedea exact unde trebuie să intervină.",
      list: [
        "Adaugă și vizualizează capcanele direct pe hartă.",
        "Filtrează capcanele în funcție de stare și gradul de infestare.",
        "Navighează rapid între diferite clădiri și etaje pentru o investigație rapidă și eficientă a zonelor vulnerabile.",
        "Evită suprapunerile ariilor de acoperire și optimizează plasarea pentru rezultate mai bune.",
      ],
    },
    img2: {
      title: "Monitorizează utilizarea și performanța",
      subtitle:
        "Ține evidența frecvenței alimentării, a cantității de otravă folosite și a responsabililor. Obține rapoarte detaliate pentru a crește eficiența și a reduce riscul infestațiilor.",
      list: [
        "Raport detaliat despre consumul total de momeală pe locație sau pe client.",
        "Istoric complet al fiecărei capcane: când a fost verificată ultima dată și de cine.",
        "Evidența capcanelor inactive și a celor care necesită înlocuire.",
        "Indicatori de performanță pentru angajați – vezi cine și-a îndeplinit sarcinile la timp.",
      ],
    },
    img3: {
      title: "Acces de pe Web și Mobil",
      subtitle:
        "Managerii au control complet din platforma web, iar angajații pot actualiza statusul capcanelor direct din aplicația mobilă.",
      list: [
        "Scanare QR Code pe fiecare capcană pentru actualizare rapidă.",
        "Administratorul poate vedea în timp real ce se întâmplă pe teren.",
        "Acces securizat cu roluri personalizabile pentru manageri și angajați.",
      ],
    },
    img4: {
      title: "Generează rapoarte personalizate",
      subtitle:
        "Întocmește rapoarte lunare. Exportează ce contează pentru tine periodic direct din aplicație. ",
      list: [
        "Rapoarte lunare, săptămânale sau personalizate pe locație, angajat sau client.",
        "Export rapid în PDF, Excel sau CSV.",
        "Grafice și tabele intuitive pentru o interpretare ușoară a datelor.",
        "Istoric al rapoartelor pentru a urmări evoluția infestării și eficiența intervențiilor.",
      ],
    },
  };

  return (
    <section id="beneficii" className="w-full px-4 md:px-6 xl:px-[12.5%] mb-20 md:mb-28 lg:mb-37.5">
      <div className="container p-4 xl:py-4 flex flex-col justify-center items-center gap-14 mx-auto">
        {/* intro text */}
        <div className="w-full flex flex-col gap-2 md:gap-4 justify-center items-center">
          <h3 className="w-[100vw] text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold md:mb-3 lg:mb-5 lg:hidden">
            Optimizează și gestionează <br /> deratizarea cu precizie
          </h3>
          <h3 className="hidden lg:block w-[100vw] text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold md:mb-3 lg:mb-5">
            Optimizează și gestionează deratizarea cu precizie
          </h3>
          <p className="text-[var(--text-color)] text-sm sm:text-base md:text-lg lg:text-xl text-center w-full max-w-250">
            Deratizarea nu implică doar plasarea capcanelor, ci și monitorizarea
            lor constantă, alimentarea și mentenanța acestora. Fără un sistem
            organizat, adaptarea strategiei poate fi dificilă: unele zone rămân
            neacoperite, verificarea nu este constantă, iar riscul de infestare
            poate crește fără să-l observi la timp. Radar Dăunători elimină
            aceste probleme printr-o soluție digitală care îți permite
            monitorizarea capcanelor, optimizarea intervențiilor și control
            total asupra deratizării.
          </p>
        </div>

        {/* image and text sections */}
        <Img_and_text Img={Img1} parity="odd" object={text.img1} />
        <Img_and_text Img={Img2} parity="even" object={text.img2} />
        <Img_and_text Img={Img3} parity="odd" object={text.img3} />
        <Img_and_text Img={Img4} parity="even" object={text.img4} />
      </div>
    </section>
  );
};

export default Beneficii;
