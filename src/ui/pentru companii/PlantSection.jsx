import React from "react";

const PlantSection = () => {
  return (
    <div className="w-full h-fit relative flex flex-col justify-center items-center mb-10 md:mb-14 lg:mb-19">
      <img
        src="/pentru_companii/bg-planteaza.png"
        alt="background-image"
        className="w-screen h-full max-h-[70vh] md:max-h-[80vh] xl:max-h-full absolute top-0 left-0 -z-10"
      />
      <div
        className={`w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[50%] flex flex-col justify-center items-center gap-6 lg:gap-14 px-4 md:px-6 lg:px-10`}
      >
        <div className="w-full h-fit my-20 flex flex-col justify-center items-center relative">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold md:mb-3 lg:mb-5">
            Plantează-ți capcanele strategic
          </h3>
          <div className="w-full">
            <img src="/pentru_companii/maps.svg" alt="iPad image" />
          </div>
          <div className="w-[calc(100%-40px)] xl:w-[65%] p-4 border-1 border-[var(--border-color)] rounded-lg bg-white xl:absolute xl:top-[30%] xl:right-[85%] mb-2 shadow-sm xl:shadow-lg">
            <p className="font-medium text-base md:text-lg xl:text-base">
              Vizualizează în timp real numărul de capcane instalate și starea
              fiecăreia.
            </p>
          </div>
          <div className="w-[calc(100%-40px)] xl:w-[65%] p-4 border-1 border-[var(--border-color)] rounded-lg bg-white xl:absolute xl:top-[40%] xl:left-[90%] mb-2 shadow-sm xl:shadow-lg">
            <p className="font-medium text-base md:text-lg xl:text-base">
              Identifică rapid capcanele verificate și neverificate pentru un control mai bun.
            </p>
          </div>
          <div className="w-[calc(100%-40px)] xl:w-[65%] p-4 border-1 border-[var(--border-color)] rounded-lg bg-white xl:absolute xl:top-[70%] xl:right-[90%] mb-2 shadow-sm xl:shadow-lg">
            <p className="font-medium text-base md:text-lg xl:text-base">
              Monitorizează utilizarea și consumul de materiale.
            </p>
          </div>
          <div className="w-[calc(100%-40px)] xl:w-[65%] p-4 border-1 border-[var(--border-color)] rounded-lg bg-white xl:absolute xl:top-[65%] xl:left-[80%] shadow-sm xl:shadow-lg">
            <p className="font-medium text-base md:text-lg xl:text-base">
              Detectează zonele cu risc crescut de infestare și ia măsuri prompte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantSection;
