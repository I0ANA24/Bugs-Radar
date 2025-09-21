import React from "react";

const Hero = () => {
  return (
    <section className="w-full px-4 md:px-6 lg:px-10 mb-20 md:mb-28 lg:mb-37.5">
      <div className="container h-[80vh] p-4 flex flex-col lg:flex-row-reverse justify-center items-center gap-8 mx-auto bg-[var(--blueish-background)] border-2 border-[var(--border-color)] rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
        <div className="w-full h-[45%] lg:h-auto lg:w-[40%] flex justify-center items-center relative">
          <img
            src="/hero.svg"
            alt="hero_image"
            className="h-full w-full mix-blend-multiply"
          />
          <img
            src="/iphone.png"
            alt="iphone_image"
            className="h-[65%] absolute bottom-0"
          />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col justify-between items-baseline sm:items-center lg:items-baseline gap-6">
          <div className="space-y-2 sm:text-center lg:text-left sm:w-[80%] lg:w-full">
            <h1 className="text-[var(--title-color)] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">Monitorizare precisă, <br /> deratizare eficientă</h1>
            <p className="text-[var(--text-color)] text-sm sm:text-base md:text-lg lg:text-xl">
              Indiferent dacă ești o firmă de deratizare sau o companie care își
              gestionează intern procesul de combatere a rozătoarelor, aplicația
              noastră îți oferă toate instrumentele necesare pentru a organiza,
              monitoriza și optimiza activitatea.
            </p>
          </div>
          <button
              className="h-14 w-full sm:w-[30%] md:w-[25%] lg:w-50 bg-[var(--blue)] border-2 border-[var(--blue)] text-white font-medium px-4.5 py-2.5 rounded-[4px] hover:bg-[var(--title-color)] hover:border-[var(--title-color)] hover:text-white hover:cursor-pointer transition-colors duration-300"
              onClick={() => toggleIsOpen()}
            >
              <a href="#contact">Contactează-ne</a>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
