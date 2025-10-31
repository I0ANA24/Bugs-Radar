import React from "react";

const Solution = ({ obj, order }) => {
  return (
    <div className="w-full max-w-100 p-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-[var(--blueish-background)] space-y-4 flex-1 flex flex-col justify-between">
      <div>
        <div className="w-full">
          <p className="font-medium text-base">Potrivit pentru</p>
          <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-bold">
            {obj.title}
          </h4>
          <p className="font-medium leading-[17px] lg:leading-6 text-base">{obj.text}</p>
        </div>
        <ul className="text-[var(--text-color)] font-semibold text-base lg:text-lg space-y-3 mt-5">
          {obj.list.map((el, index) => (
            <li key={index} className="">
              <span>
                <img
                  src="pentru_companii/check.svg"
                  alt="bullet"
                  className="inline-block mr-2 lg:mr-3"
                />
              </span>
              {el}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`w-full border-2 border-(--blue) text-(--blue) font-medium px-4.5 py-2.5 rounded-sm hover:bg-(--blue) active:bg-(--blue) hover:text-white hover:cursor-pointer transition-colors duration-300 ${order !== "first" ? "bg-(--blue) text-white" : "bg-transparent"}`}
        onClick={() => toggleIsOpen()}
      >
        <a href="#contact">Contactează-ne</a>
      </button>
    </div>
  );
};

export default Solution;
