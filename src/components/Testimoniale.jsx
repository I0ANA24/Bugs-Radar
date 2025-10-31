import React, { useEffect, useRef, useState } from "react";
import prof1 from "../assets/profile1.png";
import prof2 from "../assets/profile2.png";
import prof3 from "../assets/profile3.png";
import prof4 from "../assets/profile4.avif";
import prof5 from "../assets/profile5.jpg";

const testimonials = [
  {
    quote:
      "Radar Dăunători ne-a schimbat complet modul în care gestionăm capcanele și intervențiile. Acum vedem clar ce trebuie făcut și unde trebuie acționat, fără haos sau pierderi de timp.",
    author: "Anna M.",
    company: "Manager firmă DDD",
    img: prof1,
  },
  {
    quote:
      "Aplicația este incredibil de intuitivă. În doar câteva zile, întreaga echipă a adoptat-o și eficiența noastră a crescut cu peste 30%. Recomand cu încredere!",
    author: "Mihai P.",
    company: "Responsabil deratizare în corporație",
    img: prof2,
  },
  {
    quote:
      "Suportul tehnic este excepțional. Am avut o nelămurire și am primit răspuns în mai puțin de o oră. Se vede că în spate este o echipă de profesioniști.",
    author: "Dana M.",
    company: "Administrator clădiri comerciale",
    img: prof3,
  },
  {
    quote:
      "Cel mai mare avantaj este centralizarea datelor. Rapoartele generate automat ne ajută să luăm decizii mai bune și să le prezentăm clienților dovezi clare ale muncii noastre.",
    author: "Cristian V.",
    company: "Director Operațional",
    img: prof4,
  },
  {
    quote:
      "Planificarea rutelor zilnice pentru tehnicieni a devenit mult mai eficientă. Aplicația optimizează traseele și ne economisește timp și combustibil prețios.",
    author: "Andrei D.",
    company: "Coordonator Echipă",
    img: prof5,
  },
];

const Testimoniale = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 1,
        rootMargin: "0px",
        root: document.querySelector("#testimonial-container"),
      }
    );

    testimonialRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      testimonialRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section
      id="testimoniale"
      className="w-full px-4 md:px-6 xl:px-[12.5%] mb-20 md:mb-28 lg:mb-37.5 flex justify-center items-center"
    >
      <div className="w-[100%] sm:w-[85%] md:w-[75%] lg:w-[90%] max-w-250 xl:w-[100%] flex flex-col justify-center items-center md:border-1 md:border-[var(--border-color)] md:rounded-2xl space-y-11">
        <div className="space-y-4 w-full m-2 md:m-10">
          <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[56px] font-bold">
            Ce spun clienții?
          </h3>
          <p className="text-(--text-color) text-sm md:text-base lg:text-lg xl:text-xl text-center w-full max-w-[90%] mx-auto -mt-2 sm:mt-0">
            Feedback real de la profesioniști care folosesc Radar Dăunători
            zilnic pentru a monitoriza, optimiza și eficientiza deratizarea.
            Vezi cum aplicația noastră îi ajută să economisească timp, să reducă
            riscurile de infestare și să își gestioneze mai bine intervențiile.
          </p>
          <div className="w-full mt-8 overflow-x-auto scrollbar-hide">
            <div
              id="testimonial-container"
              className="flex gap-4 w-full overflow-x-auto mx-2 md:mx-10 snap-x snap-mandatory scroll-smooth scrollbar-hide"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  ref={(el) => (testimonialRefs.current[index] = el)}
                  data-index={index}
                  className={`w-[calc(100%-20px)] sm:w-1/2 lg:w-1/2 lg:h-100 p-6 space-y-4 lg:space-y-11 border-1 border-[var(--border-color)] rounded-2xl bg-[var(--blueish-background)] flex-shrink-0 snap-center flex flex-col justify-center items-center ${
                    index === testimonials.length - 1 ? "mr-5" : "mr-0"
                  }`}
                >
                  <div
                    className="size-20 md:size-25 lg:size-30 mx-auto bg-center bg-cover bg-no-repeat rounded-full"
                    style={{ backgroundImage: `url(${testimonial.img})` }}
                  ></div>
                  <div className="flex flex-col justify-between items-center gap-2 lg:gap-6 h-40">
                    <p className="text-[var(--text-color)] text-base text-center">
                      {testimonial.quote}
                    </p>
                    <p className="text-gray-600 text-center text-base lg:text-lg font-medium">
                      — {testimonial.author}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center items-center gap-1 m-2 md:m-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                testimonialRefs.current[index]?.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center",
                });
              }}
              className={`size-3 rounded-full inline-block transition-colors duration-300 hover:cursor-pointer ${
                activeIndex === index
                  ? "bg-[rgba(175,180,184,1)]"
                  : "bg-[rgba(236,238,239,1)]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoniale;
