import React from "react";
import { useTranslation } from "react-i18next";

const Img4 = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:w-[50%] aspect-[1.4/1] relative border-1 border-[var(--border-color)] rounded-[16px] bg-[var(--blueish-background)] pt-[4%] pr-[4%] overflow-hidden">
      {/* background image */}
      <img
        src="beneficii/card-bg.png"
        alt={t("benefits_img4_bg_alt")}
        className="w-full h-full overflow-hidden"
      />

      {/* card 1 */}
      <div className="absolute w-[36.1%] left-[7%] top-[12%]">
        <img
          src="beneficii/img4/Capcana23.svg"
          alt={t("benefits_img4_trap23_alt")}
          className="w-full"
        />
      </div>

      {/* card 2 */}
      <div className="absolute w-[30%] left-[67.6%] top-[3.6%]">
        <img
          src="beneficii/img4/Exporta.svg"
          alt={t("benefits_img4_export_alt")}
          className="w-full"
        />
      </div>

      {/* card 3 */}
      <div className="absolute w-[60%] left-0 bottom-0">
        <img
          src="beneficii/img4/Calendar.svg"
          alt={t("benefits_img4_calendar_alt")}
          className="w-full"
        />
      </div>

      {/* card 4 */}
      <div className="absolute w-[14.4%] left-[71%] top-[22.8%]">
        <img
          src="beneficii/img4/Grad.svg"
          alt={t("benefits_img4_grade_alt")}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Img4;