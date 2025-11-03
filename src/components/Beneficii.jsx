import React from "react";
import { useTranslation } from "react-i18next";
import Img_and_text from "../ui/beneficii/Img_and_text";
import Img1 from "../ui/beneficii/Img1";
import Img2 from "../ui/beneficii/Img2";
import Img3 from "../ui/beneficii/Img3";
import Img4 from "../ui/beneficii/Img4";

const Beneficii = () => {
  const { t } = useTranslation();

  // Reconstruim dinamic obiectul 'text' folosind traducerile
  // Opțiunea { returnObjects: true } este esențială pentru a prelua listele (array-urile)
  const text = {
    img1: {
      title: t("benefits_feature1_title"),
      subtitle: t("benefits_feature1_subtitle"),
      list: t("benefits_feature1_list", { returnObjects: true }),
    },
    img2: {
      title: t("benefits_feature2_title"),
      subtitle: t("benefits_feature2_subtitle"),
      list: t("benefits_feature2_list", { returnObjects: true }),
    },
    img3: {
      title: t("benefits_feature3_title"),
      subtitle: t("benefits_feature3_subtitle"),
      list: t("benefits_feature3_list", { returnObjects: true }),
    },
    img4: {
      title: t("benefits_feature4_title"),
      subtitle: t("benefits_feature4_subtitle"),
      list: t("benefits_feature4_list", { returnObjects: true }),
    },
  };

  return (
    <section id="beneficii" className="w-full px-4 md:px-6 xl:px-[12.5%] mb-20 md:mb-28 lg:mb-37.5">
      <div className="container p-4 xl:py-4 flex flex-col justify-center items-center gap-14 mx-auto">
        {/* intro text */}
        <div className="w-full flex flex-col gap-2 md:gap-4 justify-center items-center">
          <h3 className="w-full text-center text-xl sm:text-2xl md:text-3xl font-bold md:mb-3 lg:hidden">
            {t("benefits_title_part1")} <br /> {t("benefits_title_part2")}
          </h3>
          <h3 className="hidden lg:block w-full text-center lg:text-4xl xl:text-5xl 2xl:text-[56px] font-bold lg:mb-5">
            {t("benefits_title_part1")} {t("benefits_title_part2")}
          </h3>
          <p className="text-[var(--text-color)] text-sm md:text-base xl:text-lg 2xl:text-xl text-center w-full max-w-250">
            {t("benefits_intro_paragraph")}
          </p>
        </div>

        {/* image and text sections */}
        <Img_and_text Img={Img1} parity="odd" object={text.img1} />
        <Img_and_text Img={Img2} parity="even" object={text.img2} />
        <Img_and_text Img={Img3} parity="odd" object={text.img3} />
        <Img_and_text Img={Img4} parity="even" object={text.img4} />
      </div>
    </section>
  );
};

export default Beneficii;