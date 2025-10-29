import React from "react";
import { useTranslation } from "react-i18next";
import Solution from "./Solution";

const SolutionsSection = () => {
  const { t } = useTranslation();

  // Reconstruim dinamic obiectul 'sol_text' folosind traducerile
  const sol_text = {
    sol1: {
      title: t("solution1_title"),
      text: t("solution1_text"),
      list: t("solution1_list", { returnObjects: true }), // Preluăm lista ca array
    },
    sol2: {
      title: t("solution2_title"),
      text: t("solution2_text"),
      list: t("solution2_list", { returnObjects: true }), // Preluăm lista ca array
    },
  };

  return (
    <div className="container p-4 xl:py-4 flex flex-col justify-center items-center gap-14 mx-auto mb-20 md:mb-28 lg:mb-37.5">
      {/* intro text */}
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold md:mb-3 lg:mb-5">
          {t("solutions_section_title")}
        </h3>
        <p className="text-(--text-color) text-sm md:text-base text-center w-full max-w-250 mt-0">
          {t("solutions_section_subtitle")}
        </p>
      </div>

      {/* solutions */}
      <div className="w-full flex flex-col items-center justify-stretch lg:items-stretch lg:justify-center lg:flex-row gap-4 mx-auto">
        <Solution obj={sol_text.sol1} />
        <Solution obj={sol_text.sol2} />
      </div>
    </div>
  );
};

export default SolutionsSection;