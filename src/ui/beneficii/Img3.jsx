import React from "react";
import { useTranslation } from "react-i18next";

const Img3 = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:w-[50%] aspect-[1.4/1] relative border-1 border-[var(--border-color)] rounded-[16px] bg-[var(--blueish-background)] pt-[4%] pr-[4%] overflow-hidden">
      {/* background images */}
      <img
        src="beneficii/card-bg-mic.png"
        alt={t("benefits_img3_bg_alt")}
        className="w-[28.1%] h-[96.4%] overflow-hidden absolute left-[15.53%] -top-[12%]"
      />
      <img
        src="beneficii/card-bg-mic.png"
        alt={t("benefits_img3_bg_alt")}
        className="w-[28.1%] h-[96.4%] overflow-hidden absolute left-[56.35%] top-[12%]"
      />

      {/* card 1 */}
      <div className="absolute w-[40%] left-[11%] top-[14%]">
        <img
          src="beneficii/img3/Localizare.svg"
          alt={t("benefits_img3_location_alt")}
          className="w-full"
        />
      </div>

      {/* card 2 */}
      <div className="absolute w-[31.2%] left-[62.8%] top-[32.6%]">
        <img
          src="beneficii/img3/Igienizeaza.svg"
          alt={t("benefits_img3_sanitize_alt")}
          className="w-full"
        />
      </div>

      {/* card 3 */}
      <div className="absolute w-[39.5%] left-[21.75%] top-[71.8%]">
        <img
          src="beneficii/img3/Cubes.svg"
          alt={t("benefits_img3_cubes_alt")}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Img3;