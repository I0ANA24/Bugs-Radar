import React from "react";
import { useTranslation } from "react-i18next";

const Img1 = () => {
  const { t } = useTranslation();

  return (
    <img
      src="beneficii/img1/IMG1.png"
      alt="image"
      className="w-full lg:w-[50%] aspect-[1.4/1]"
    />
  );
};

export default Img1;