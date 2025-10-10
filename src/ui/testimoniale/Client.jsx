import React from "react";
import profile4 from "../../assets/profile4.avif";

const Client = () => {
  return (
    <div className="w-100 p-6 space-y-11 border-1 border-[var(--border-color)] rounded-2xl bg-[var(--blueish-background)]">
      <div
        className="size-30 mx-auto bg-center bg-cover bg-no-repeat rounded-full"
        style={{ backgroundImage: `url(${profile4})` }}
      ></div>
      <div className="space-y-6">
        <p className="text-[var(--text-color)] text-sm sm:text-md md:text-md lg:text-md text-center">
          "Radar Dăunători ne-a schimbat complet modul în care gestionăm
          capcanele și intervențiile. Acum vedem clar ce trebuie făcut și unde
          trebuie acționat, fără haos sau pierderi de timp."
        </p>
        <p className="text-gray-600 text-center text-base">
          — Anna M., Manager firmă DDD
        </p>
      </div>
    </div>
  );
};

export default Client;
