import React from "react";
import Solution from "./Solution";

const SolutionsSection = () => {
  const sol_text = {
    sol1: {
      title: "Departamente de Deratizare",
      text: "Toate instrumentele necesare pentru un management intern eficient",
      list: [
        "Număr nelimitat de utilizatori",
        "Monitorizare în timp real",
        "Gestionarea capcanelor",
        "Managementul angajaților",
        "Administrarea mai multor locații",
        "Generare rapoarte detaliate",
        "Suport 24/7",
      ]
    },
    sol2: {
      title: "Firme de Deratizare",
      text: "Tot ce ai nevoie pentru a gestiona eficient clienții și locațiile tale",
      list: [
        "Număr nelimitat de utilizatori",
        "Monitorizare în timp real",
        "Gestionarea capcanelor",
        "Managementul angajaților",
        "Administrarea mai multor locații",
        "Generare rapoarte detaliate",
        "Suport 24/7",
        "Gestionarea multiplelor locații",
        "Managementul clienților și locațiilor",
        "Interfață personalizabilă",
      ]
    }
  };

  return (
    <div className="container p-4 xl:py-4 flex flex-col justify-center items-center gap-14 mx-auto mb-20 md:mb-28 lg:mb-37.5">
      {/* intro text */}
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold md:mb-3 lg:mb-5">
          Alege soluția potrivită nevoilor tale
        </h3>
        <p className="text-[var(--text-color)] text-sm sm:text-base md:text-lg lg:text-xl text-center w-full max-w-250 -mt-0">
          Funcționalități complete pentru firme de deratizare și departamente
          interne.
        </p>
      </div>

      {/* solutions */}
      <div className="w-full flex flex-col items-center justify-stretch lg:items-stretch lg:justify-center lg:flex-row gap-4 mx-auto">
        <Solution obj={sol_text.sol1} />
        <Solution obj={sol_text.sol2} />
      </div>
    </div>
  );
};

export default SolutionsSection;
