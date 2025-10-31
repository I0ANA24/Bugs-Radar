import React, { useRef, useState } from "react";

const Question = ({ obj, last }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full px-6 ${
        last === "1" ? "border-none" : "border-b border-(--border-color)"
      }`}
    >
      <div className="w-full flex justify-between items-center gap-4 group hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <p className={`w-full font-medium text-base sm:text-lg md:text-xl xl:text-2xl py-4 transition-colors duration-200 group-hover:text-(--blue)! ${isOpen ? "text-(--blue)!" : ""}`}>
          {obj.q}
        </p>
        <div className="relative size-4 sm:size-5 flex justify-center items-center">
          <img
            src={"intrebari_frecvente/plus.svg"}
            alt="open"
            className={`absolute top-0 left-0 size-4! sm:size-5 transition-opacity duration-500 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={"intrebari_frecvente/minus.svg"}
            alt="close"
            className={`absolute top-0 left-0 size-4! sm:size-5 transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-500 overflow-hidden`}
      >
        {obj.a.map((el, index) => (
          <div key={index} className="pb-4">
            <p className="font-medium text-base">{el}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
