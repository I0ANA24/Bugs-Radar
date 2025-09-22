import React from "react";

const Img_and_text = ({ Img, parity, object }) => {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center gap-4 lg:gap-14 ${
        parity === "odd" ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <Img />
      <div className="w-full lg:w-[50%] space-y-2">
        {/* title */}
        <div>
          <h3 className="text-[var(--title-color)] font-bold text-xl md:text-2xl lg:text-3xl xl:text-[32px]">
            {object.title}
          </h3>
        </div>
        {/* subtitle */}
        <div>
          <p className="text-[var(--text-color)] text-sm sm:text-base md:text-lg lg:text-xl">
            {object.subtitle}
          </p>
        </div>
        {/* list */}
        <ul className="text-[var(--text-color)] font-semibold md:text-base space-y-3 mt-5">
          {object.list.map((el, index) => (
            <li key={index} className="flex items-center gap-4 md:gap-6 w-full">
              <span className="inline-block size-1.5 md:size-2 bg-[var(--blue)] rounded-full"></span>
              <p className="w-[90%]">{el}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Img_and_text;
