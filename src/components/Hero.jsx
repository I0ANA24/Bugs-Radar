import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full px-4 md:px-6 lg:px-10 mb-20 md:mb-28 lg:mb-37.5">
      <div className="w-full h-[80vh] min-h-fit p-4 flex flex-col lg:flex-row-reverse justify-center items-center gap-8 mx-auto bg-[var(--blueish-background)] border-2 border-[var(--border-color)] rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
        <div className="w-full h-[45%] lg:h-auto lg:w-[40%] flex justify-center items-center relative">
          <img
            src="hero.svg"
            alt={t("hero_image_alt")}
            className="h-full w-full mix-blend-multiply"
          />
          <img
            src="iphone.png"
            alt={t("iphone_image_alt")}
            className="h-[65%] absolute bottom-0"
          />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col justify-between items-baseline sm:items-center lg:items-baseline gap-6">
          <div className="space-y-2 sm:text-center lg:text-left sm:w-[80%] lg:w-full">
            <h1 className="text-[var(--title-color)] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[100%]">
              {t("hero_title_line1")} <br /> {t("hero_title_line2")}
            </h1>
            <p className="text-[var(--text-color)] text-sm md:text-base lg:text-lg xl:text-xl font-medium">
              {t("hero_description")}
            </p>
          </div>
          <button className="h-14 w-full sm:w-[30%] md:w-[25%] lg:w-50 bg-[var(--blue)] border-2 border-[var(--blue)] text-white font-medium px-4.5 py-2.5 rounded-[4px] hover:bg-[var(--title-color)] hover:border-[var(--title-color)] hover:text-white hover:cursor-pointer transition-colors duration-300">
            {/* Am refolosit cheia de la header pentru consistență */}
            <a href="#contact">{t("header_cta_contact")}</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;