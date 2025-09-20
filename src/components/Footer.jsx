import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-4 md:px-6 lg:px-10 bg-[var(--blueish-background)] border-t-2 border-[var(--border-color)]">
      <div className="container h-75 lg:h-34 mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6.5">
        {/* logo + copyright */}
        <div className="w-full lg:w-[52%] h-20 flex flex-col justify-between">
          {/* logo */}
          <div className="w-35">
            <a href="">
              <img src="/logo.svg" alt="logo" className="w-[140px]" />
            </a>
          </div>
          {/* copyright */}
          <p className="font-light text-[14px] text-[var(--(title-color))]">
            @2025 RadarDaunatori, toate drepturile rezervate.
          </p>
        </div>
        {/* menu */}
        <nav className="w-full h-37 flex flex-col lg:flex-row justify-between lg:justify-end lg:gap-10 items-baseline lg:items-center">
          <a
            href="#beneficii"
            className="hover:text-[var(--blue)] font-medium text-[var(--title-color)]"
            onClick={() => toggleIsOpen()}
          >
            Beneficii
          </a>
          <a
            href="#companii"
            className="hover:text-[var(--blue)] font-medium text-[var(--title-color)]"
            onClick={() => toggleIsOpen()}
          >
            Pentru Companii
          </a>
          <a
            href="#testimoniale"
            className="hover:text-[var(--blue)] font-medium text-[var(--title-color)]"
            onClick={() => toggleIsOpen()}
          >
            Testimoniale
          </a>
          <a
            href="#faq"
            className="hover:text-[var(--blue)] font-medium text-[var(--title-color)]"
            onClick={() => toggleIsOpen()}
          >
            Întrebări Frecvente
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
