import React from "react";
import Client from "../ui/testimoniale/Client";

const Testimoniale = () => {
  return (
    <section
      id="testimoniale"
      className="w-full px-4 md:px-6 xl:px-[12.5%] mb-20 md:mb-28 lg:mb-37.5 flex justify-center items-center"
    >
      <div className="w-[100%] sm:w-[85%] md:w-[75%] lg:w-[90%] max-w-250 xl:w-[100%] flex flex-col justify-center items-center md:border-1 md:border-[var(--border-color)] md:rounded-2xl space-y-11">
        <div className="space-y-4 w-full m-2 md:m-10">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">
            Ce spun clienții?
          </h3>
          <p className="text-[var(--text-color)] text-md sm:text-md md:text-lg lg:text-lg text-center w-full max-w-[90%] mx-auto -mt-2 sm:-mt-0">
            Feedback real de la profesioniști care folosesc Radar Dăunători
            zilnic pentru a monitoriza, optimiza și eficientiza deratizarea.
            Vezi cum aplicația noastră îi ajută să economisească timp, să reducă
            riscurile de infestare și să își gestioneze mai bine intervențiile.
          </p>
          <div className="w-full overflow-scroll mt-8">
            <div className="flex gap-4 w-fit mx-2 md:mx-10">
              <Client />
              <Client />
              <Client />
              <Client />
              <Client />
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center items-center gap-1 m-2 md:m-10">
          <span className="size-3 bg-[rgba(175,180,184,1)] rounded-full inline-block"></span>
          <span className="size-3 bg-[rgba(236,238,239,1)] rounded-full inline-block"></span>
          <span className="size-3 bg-[rgba(236,238,239,1)] rounded-full inline-block"></span>
          <span className="size-3 bg-[rgba(236,238,239,1)] rounded-full inline-block"></span>
          <span className="size-3 bg-[rgba(236,238,239,1)] rounded-full inline-block"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimoniale;
