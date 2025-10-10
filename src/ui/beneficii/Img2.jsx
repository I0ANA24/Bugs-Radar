import React from "react";

const Img2 = () => {
  return (
    <div className="w-full lg:w-[50%] aspect-[1.4/1] relative border-1 border-[var(--border-color)] rounded-[16px] bg-[var(--blueish-background)] pb-[4%] pr-[4%]">
      {/* background image */}
      <img
        src="beneficii/card-bg.png"
        alt="background"
        className="w-full h-full overflow-hidden"
      />

      {/* card 1 */}
      <div className="absolute w-[40%] left-[10%] top-[21%]">
        <img
          src="beneficii/img2/Cantitate.svg"
          alt=""
          className="w-full"
        />
      </div>

      {/* card 2 */}
      <div className="absolute w-[31.2%] left-[66.8%] top-[34.6%]">
        <img
          src="beneficii/img2/Distribuire.svg"
          alt=""
          className="w-full"
        />
      </div>

      {/* card 3 */}
      <div className="absolute w-[39.5%] left-[8.75%] top-[74%]">
        <img
          src="beneficii/img2/Capcane.svg"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Img2;
