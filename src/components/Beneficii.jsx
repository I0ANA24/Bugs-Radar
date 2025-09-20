import React from "react";

const Beneficii = () => {
  return (
    <section className="w-full px-4 md:px-6 lg:px-10 mb-20 md:mb-28 lg:mb-37.5">
      <div className="container p-4 flex flex-col lg:flex-row-reverse justify-center items-center gap-10 mx-auto">
        {/* intro text */}
        <div className="w-full flex flex-col gap-2 md:gap-4 justify-center items-center">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:hidden">
            Optimizează și gestionează <br /> deratizarea cu precizie
          </h1>
          <h1 className="hidden lg:text-4xl xl:text-5xl font-bold text-center lg:block">
            Optimizează și gestionează deratizarea cu precizie
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center w-full max-w-250">
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
      </div>
    </section>
  );
};

export default Beneficii;
