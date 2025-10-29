import React from "react";
import { useTranslation } from "react-i18next";
import HorizontalSection from "../ui/pentru companii/HorizontalSection";
import PlantSection from "../ui/pentru companii/PlantSection";
import SolutionsSection from "../ui/pentru companii/SolutionsSection";

const PentruCompanii = () => {
  const { t } = useTranslation();

  // Reconstruim dinamic obiectul 'hs_text' cu traducerile
  const hs_text = {
    section1: {
      img: "pentru_companii/phone+laptop.png",
      title1: t("companies_section1_title1"),
      title2: t("companies_section1_title2"),
      text: t("companies_section1_text"),
    },
    section2: {
      img: "pentru_companii/desktop.svg",
      title1: t("companies_section2_title1"),
      title2: t("companies_section2_title2"),
      text: t("companies_section2_text"),
    },
  };

  return (
    <section id="companii" className="w-full mb-20 md:mb-28 lg:mb-37.5">
      <HorizontalSection object={hs_text.section1} parity="odd" />
      <PlantSection />
      <SolutionsSection />
      <HorizontalSection object={hs_text.section2} parity="even" />
    </section>
  );
};

export default PentruCompanii;