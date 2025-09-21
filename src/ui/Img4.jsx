import React from "react";

const Img4 = () => {
  return (
    <div className="w-full lg:w-[50%] aspect-[1.4/1] relative border-1 border-[var(--border-color)] rounded-[16px] bg-[var(--blueish-background)] pt-[4%] pr-[4%] overflow-hidden">
      {/* background image */}
      <img
        src="/beneficii/card-bg.png"
        alt="background"
        className="w-full h-full overflow-hidden"
      />

      {/* card 1 */}
      <div className="absolute w-[36.1%] left-[7%] top-[12%]">
        <img
          src="/beneficii/img4/Capcana23.svg"
          alt=""
          className="w-full"
        />
      </div>

      {/* card 2 */}
      <div className="absolute w-[30%] left-[67.6%] top-[3.6%]">
        <img
          src="/beneficii/img4/Exporta.svg"
          alt=""
          className="w-full"
        />
      </div>

      {/* card 3 */}
      <div className="absolute w-[60%] left-0 bottom-0">
        <img
          src="/beneficii/img4/Calendar.svg"
          alt=""
          className="w-full"
        />
      </div>

      {/* card 4 */}
      <div className="absolute w-[14.4%] left-[71%] top-[22.8%]">
        <img
          src="/beneficii/img4/Grad.svg"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Img4;
