import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full p-4 md:px-6 lg:px-10 bg-[var(--blueish-background)] border-t-2 border-[var(--border-color)]">
      <div className="container min-w-[90%] h-75 lg:h-34 mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6.5">
        {/* logo + copyright */}
        <div className="w-full lg:w-[52%] h-20 flex flex-col justify-between">
          {/* logo */}
          <div className="w-35">
            <a href="">
              {/* Refolosim cheia de la header pentru logo */}
              <img src="logo.svg" alt={t("header_logo_alt")} className="w-[140px]" />
            </a>
          </div>
          {/* copyright */}
          <p className="text-[var(--text-color)] font-light text-[14px] lg:text-base xl:text-lg">
            {t("footer_copyright")}
          </p>
        </div>
        {/* menu */}
        <nav className="w-full h-37 flex flex-col lg:flex-row justify-between lg:justify-end lg:gap-10 items-baseline lg:items-center">
          <a
            href="#beneficii"
            className="hover:text-[var(--blue)] font-medium text-[var(--title-color)] text-base lg:text-lg xl:text-xl"
            onClick={() => toggleIsOpen()}
          >
            {t("header_nav_benefits")}
          </a>
          <a
            href="#companii"
            className="hover:text-[var(--blue)] font-medium text-[var(--title-color)] text-base lg:text-lg xl:text-xl"
            onClick={() => toggleIsOpen()}
          >
            {t("header_nav_forCompanies")}
          </a>
          <a
            href="#testimoniale"
            className="hover:text-[var(--blue)] font-medium text-[var(--title-color)] text-base lg:text-lg xl:text-xl"
            onClick={() => toggleIsOpen()}
          >
            {t("header_nav_testimonials")}
          </a>
          <a
            href="#faq"
            className="hover:text-[var(--blue)] font-medium text-[var(--title-color)] text-base lg:text-lg xl:text-xl"
            onClick={() => toggleIsOpen()}
          >
            {t("header_nav_faq")}
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;