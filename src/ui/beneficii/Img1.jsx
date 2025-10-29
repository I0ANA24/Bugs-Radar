import React from "react";
import { useTranslation } from "react-i18next";

const Img1 = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:w-[50%] aspect-[1.4/1] relative border-1 border-[var(--border-color)] rounded-[16px] bg-[var(--blueish-background)] pt-[4%] pr-[4%]">
      {/* background image */}
      <img
        src="beneficii/card-bg.png"
        alt={t("benefits_img1_bg_alt")}
        className="w-full h-full overflow-hidden"
      />

      {/* card 1 */}
      <div className="absolute w-[36%] aspect-[2.26/1] bg-white left-[8.75%] top-[19%] border-1 border-[var(--border-color)] rounded-[5px] md:rounded-[12px] lg:rounded-[16px] shadow-lg shadow-neutral-300 p-2 md:p-4 flex flex-col justify-between">
        <div className="w-full space-y-1">
          <div className="w-full flex justify-between">
            <img
              src="beneficii/img1/Input.svg"
              alt={t("benefits_img1_search_alt")}
              className="w-[81.33%]"
            />
            <img
              src="beneficii/img1/Filter.svg"
              alt={t("benefits_img1_filter_alt")}
              className="w-[13.77%] aspect-square"
            />
          </div>
          <div className="w-full">
            <img
              src="beneficii/img1/Zona.svg"
              alt={t("benefits_img1_zone_alt")}
              className="w-[55.5%]"
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-[var(--text-color)] w-full text-[40%] sm:text-[60%] md:text-[70%] lg:text-[9px] xl:text-[9px]">
            {t("benefits_img1_infestation_label")}
          </p>
          <img
            src="beneficii/img1/Switch.svg"
            alt={t("benefits_img1_switch_alt")}
            className="w-[12.44%]"
          />
        </div>
      </div>

      {/* card 2 */}
      <div className="absolute w-[40%] aspect-[6.04/1] left-[54.5%] top-[10.3%]">
        <img
          src="beneficii/img1/Cladiri.svg"
          alt={t("benefits_img1_buildings_alt")}
          className="w-full"
        />
      </div>

      {/* card 3 */}
      <div className="absolute w-[28%] left-[28.5%] top-[38%]">
        <img
          src="beneficii/img1/Hala1.svg"
          alt={t("benefits_img1_hall_alt")}
          className="w-full"
        />
      </div>

      {/* card 4 */}
      <div className="absolute w-[37%] left-[15%] top-[80%]">
        <img
          src="beneficii/img1/Capcana.svg"
          alt={t("benefits_img1_trap_alt")}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Img1;