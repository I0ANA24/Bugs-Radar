import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Hook-ul 'useTranslation' ne oferă funcția 't'
  const { t } = useTranslation();

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full p-4 md:px-6 lg:px-10">
      <div className="container flex flex-col gap-2 mx-auto">
        {/* top menu */}
        <div className="w-full bg-white flex justify-between items-center p-4 border-2 border-[var(--border-color)] rounded-[16px] gap-4">
          {/* logo */}
          <div className="xl:w-80">
            <div className="w-25">
              <a href="">
                <img src="logo.svg" alt={t("header_logo_alt")} />
              </a>
            </div>
          </div>
          {/* hamburger */}
          <div
            className={`p-2 rounded-full cursor-pointer lg:hidden ${
              isOpen
                ? "bg-[var(--active-mobile-menu)] hover:bg-[var(--active-mobile-menu)]"
                : "bg-white hover:bg-[var(--hover-mobile-menu)]"
            }`}
            onClick={() => toggleIsOpen()}
          >
            <img src={isOpen ? "white_menu.svg" : "menu.svg"} alt={t("header_menu_alt")} />
          </div>
          {/* desktop nav */}
          <div className="hidden lg:block">
            <nav className="w-full flex justify-center items-center gap-8 text-center">
              <a
                href="#beneficii"
                className="hover:text-[var(--blue)] font-medium text-[var(--title-color)]"
              >
                {t("header_nav_benefits")}
              </a>
              <a
                href="#companii"
                className="hover:text-[var(--blue)] font-medium text-[var(--title-color)]"
              >
                {t("header_nav_forCompanies")}
              </a>
              <a
                href="#testimoniale"
                className="hover:text-[var(--blue)] font-medium text-[var(--title-color)]"
              >
                {t("header_nav_testimonials")}
              </a>
              <a
                href="#faq"
                className="hover:text-[var(--blue)] font-medium text-[var(--title-color)]"
              >
                {t("header_nav_faq")}
              </a>
            </nav>
          </div>
          {/* desktop buttons */}
          <div className="hidden lg:flex gap-2">
            <button className="w-39 bg-transparent border-2 border-[var(--blue)] text-[var(--blue)] font-medium px-4.5 py-2.5 rounded-[4px] hover:bg-[var(--title-color)] hover:border-[var(--title-color)] hover:text-white hover:cursor-pointer transition-colors duration-300">
              <a href="#contact">{t("header_cta_contact")}</a>
            </button>
            <button className="w-39 bg-[var(--blue)] border-2 border-[var(--blue)] text-white font-medium px-4.5 py-2.5 rounded-[4px] hover:bg-[var(--title-color)] hover:border-[var(--title-color)] hover:text-white hover:cursor-pointer transition-colors duration-300">
              <a href="#contact">{t("header_cta_demo")}</a>
            </button>
          </div>
        </div>
        {/* bottom menu */}
        <div
          className={`w-full bg-white lg:hidden p-4 border-2 border-[var(--border-color)] rounded-[16px] gap-4 ${
            isOpen ? "flex justify-between items-center" : "hidden"
          }`}
        >
          <nav className="w-full flex flex-col justify-center items-center">
            <a
              href="#beneficii"
              className="h-14 flex justify-center items-center hover:text-[var(--blue)] font-medium text-[var(--title-color)]"
              onClick={() => toggleIsOpen()}
            >
              {t("header_nav_benefits")}
            </a>
            <a
              href="#companii"
              className="h-14 flex justify-center items-center hover:text-[var(--blue)] font-medium text-[var(--title-color)]"
              onClick={() => toggleIsOpen()}
            >
              {t("header_nav_forCompanies")}
            </a>
            <a
              href="#testimoniale"
              className="h-14 flex justify-center items-center hover:text-[var(--blue)] font-medium text-[var(--title-color)]"
              onClick={() => toggleIsOpen()}
            >
              {t("header_nav_testimonials")}
            </a>
            <a
              href="#faq"
              className="h-14 flex justify-center items-center hover:text-[var(--blue)] font-medium text-[var(--title-color)]"
              onClick={() => toggleIsOpen()}
            >
              {t("header_nav_faq")}
            </a>
            <button
              className="h-14 w-full bg-[var(--blue)] border-2 border-[var(--blue)] text-white font-medium px-4.5 py-2.5 rounded-[4px] hover:bg-[var(--title-color)] hover:border-[var(--title-color)] hover:text-white hover:cursor-pointer transition-colors duration-300"
              onClick={() => toggleIsOpen()}
            >
              <a href="#contact">{t("header_cta_contact")}</a>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;