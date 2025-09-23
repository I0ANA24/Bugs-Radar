import React from "react";

const HorizontalSection = ({ object, parity }) => {
  return (
    <div className={`w-full h-fit bg-[var(--blueish-background)] flex justify-between items-center gap-6 lg:gap-0 ${parity === "odd" ? "pt-12 md:pt-10 flex-col-reverse md:flex-row" : "py-12 md:py-10 flex-col md:flex-row mb-20 md:mb-28 lg:mb-37.5"}`}>
      <div className={`${parity === "odd" ? "w-[100%] sm:w-[80%] md:w-[45%] lg:w-[45%]" : "w-[80%] md:w-[35%] lg:w-[38%] -ml-[40%] md:-ml-0"}`}>
        <img
          src={object.img}
          alt="image"
          className={`w-full ${parity === "odd" ? "mix-blend-darken" : ""}`}
        />
      </div>
      <div className={`w-[100%] lg:h-full sm:w-[100%] md:w-[55%] sm:flex sm:flex-col sm:justify-center sm:items-end px-8 md:pr-8 lg:pr-[10%] md:pl-0 md:-ml-[5%] md:pb-10 space-y-4 ${parity === "odd" ? "lg:w-[55%]" : "lg:w-[55%]"}`}>
        <h3 className="sm:w-[80%] md:w-[100vw] md:-ml-[100%] font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-right">{object.title1} <br /> {object.title2}</h3>
        <p className="text-base sm:w-[80%] md:w-[100%] sm:text-lg lg:text-xl text-right">
          {object.text}
        </p>
      </div>
    </div>
  );
};

export default HorizontalSection;
