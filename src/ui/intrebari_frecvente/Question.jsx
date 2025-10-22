import React from "react";

const Question = ({ obj, last }) => {
  return (
    <div
      className={`w-full px-6 ${last === "1" ? "border-none" : "border-b-1"} group`}
    >
      <h4 className="infotext-lg py-4 group-hover:text-red-500">{obj.q}</h4>
      {obj.a.map((el, index) => (
        <div key={index} className="pb-4">
          <p className="text-sm">{el}</p>
        </div>
      ))}
    </div>
  );
};

export default Question;
