import React from "react";
import Question from "../ui/intrebari_frecvente/Question";

const IntrebariFrecvente = () => {
  const questions = {
    question1: {
      q: "Pot folosi aplicația dacă am mai multe locații sau clienți?",
      a: [
        "Da! Radar Dăunători permite gestionarea mai multor locații și clienți într-un singur loc. Poți organiza capcanele pe clădiri, etaje și zone specifice, astfel încât să ai o imagine clară asupra deratizării în fiecare locație.",
      ],
    },
    question2: {
      q: "Cum funcționează scanarea QR Code?",
      a: [
        "Fiecare capcană este etichetată cu un cod QR unic, pe care angajații îl pot scana direct din aplicația mobilă. După scanare, pot actualiza statusul capcanei (verificată, reumplută, necesită înlocuire) în timp real.",
      ],
    },
    question3: {
      q: "Ce tipuri de companii pot folosi Rat Track?",
      a: [
        "Rat Track este ideal pentru:",
        "✅ Firme de deratizare, care gestionează mai mulți clienți și locații.",
        "✅ Companii mari, cu propriul departament de deratizare intern.",
        "✅ Industria alimentară, depozite, fabrici, retail, unde controlul rozătoarelor este esențial.",
      ],
    },
    question4: {
      q: "Pot accesa aplicația de pe mobil și desktop?",
      a: [
        "Da! Managerii pot folosi versiunea web pentru a supraveghea activitatea, analiza datele și genera rapoarte. Angajații folosesc aplicația mobilă pentru a actualiza statusul capcanelor direct din teren.",
      ],
    },
    question5: {
      q: "Cum pot testa aplicația?",
      a: [
        "Poți solicita un demo gratuit, unde îți vom arăta cum funcționează Rat Track și cum te poate ajuta în gestionarea deratizării.",
        "📩 Contactează-ne pentru o prezentare personalizată!",
      ],
    },
  };

  return (
    <section
      id="testimoniale"
      className="w-full px-4 md:px-6 xl:px-[12.5%] mb-20 md:mb-28 lg:mb-37.5 flex justify-center items-center relative"
    >
      <img
        src="intrebari_frecvente/bg-intrebari.png"
        alt="background-image"
        className="w-screen h-full max-h-[70vh] md:max-h-[80vh] xl:max-h-full absolute top-0 left-0 -z-10"
      />
      <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[90%] max-w-180 xl:w-full flex flex-col justify-center items-center border border-(--border-color) rounded-2xl space-y-11 bg-white">
        <div className="space-y-4 w-full m-4 md:m-8 pt-4">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">
            Întrebări frecvente
          </h3>
          <p className="text-sm sm:text-base text-center w-full max-w-[90%] mx-auto -mt-2 sm:mt-0">
            Ai întrebări despre produsul nostru? Iată răspunsuri la câteva
            dintre ele.
          </p>
        </div>
        <div className="w-full">
          <Question obj={questions.question1} />
          <Question obj={questions.question2} />
          <Question obj={questions.question3} />
          <Question obj={questions.question4} />
          <Question obj={questions.question5} />
        </div>
      </div>
    </section>
  );
};

export default IntrebariFrecvente;
