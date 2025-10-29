import React from "react";
import { useTranslation } from "react-i18next";

const PlantSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-fit relative flex flex-col justify-center items-center mb-10 md:mb-14 lg:mb-19">
      <img
        src="pentru_companii/bg-planteaza.png"
        alt={t("plant_section_bg_alt")}
        className="w-screen h-full max-h-[70vh] md:max-h-[80vh] xl:max-h-full absolute top-0 left-0 -z-10"
      />
      <div
        className={`w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[45%] flex flex-col justify-center items-center gap-6 lg:gap-14 px-4 md:px-6 lg:px-10`}
      >
        <div className="w-full h-fit my-20 flex flex-col justify-center items-center relative">
          <h3 className="w-[100vw] text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold md:mb-3 lg:mb-5">
            {t("plant_section_title")}
          </h3>
          <div className="w-full">
            <img src="pentru_companii/maps.svg" alt={t("plant_section_maps_alt")} />
          </div>
          <div className="w-[calc(100%-40px)] xl:w-[65%] p-4 border-1 border-[var(--border-color)] rounded-lg bg-white xl:absolute xl:top-[30%] xl:right-[85%] mb-2 shadow-sm xl:shadow-lg">
            <p className="font-medium text-base md:text-lg xl:text-sm">
              {t("plant_section_card1_text")}
            </p>
          </div>
          <div className="w-[calc(100%-40px)] xl:w-[65%] p-4 border-1 border-[var(--border-color)] rounded-lg bg-white xl:absolute xl:top-[40%] xl:left-[90%] mb-2 shadow-sm xl:shadow-lg">
            <p className="font-medium text-base md:text-lg xl:text-sm">
              {t("plant_section_card2_text")}
            </p>
          </div>
          <div className="w-[calc(100%-40px)] xl:w-[65%] p-4 border-1 border-[var(--border-color)] rounded-lg bg-white xl:absolute xl:top-[70%] xl:right-[90%] mb-2 shadow-sm xl:shadow-lg">
            <p className="font-medium text-base md:text-lg xl:text-sm">
              {t("plant_section_card3_text")}
            </p>
          </div>
          <div className="w-[calc(100%-40px)] xl:w-[65%] p-4 border-1 border-[var(--border-color)] rounded-lg bg-white xl:absolute xl:top-[65%] xl:left-[80%] shadow-sm xl:shadow-lg">
            <p className="font-medium text-base md:text-lg xl:text-sm">
              {t("plant_section_card4_text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantSection;