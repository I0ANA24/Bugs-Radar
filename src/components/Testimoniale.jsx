import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// Imaginile rămân importuri statice
import prof1 from "../assets/profile1.png";
import prof2 from "../assets/profile2.png";
import prof3 from "../assets/profile3.png";
import prof4 from "../assets/profile4.avif";
import prof5 from "../assets/profile5.jpg";

// Un array static doar pentru imagini
const testimonialImages = [prof1, prof2, prof3, prof4, prof5];

const Testimoniale = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRefs = useRef([]);

  // Preluăm textele din fișierul de traducere și le combinăm cu imaginile
  const testimonials = t("testimonials_list", { returnObjects: true }).map(
    (testimonial, index) => ({
      ...testimonial,
      img: testimonialImages[index],
    })
  );

  useEffect(() => {
    // ... logica pentru IntersectionObserver rămâne neschimbată
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

    const refs = testimonialRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
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
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">
            {t("testimonials_section_title")}
          </h3>
          <p className="text-(--text-color) text-sm md:text-base text-center w-full max-w-[90%] mx-auto -mt-2 sm:-mt-0">
            {t("testimonials_section_subtitle")}
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
                  className={`w-[calc(100%-20px)] sm:w-1/2 lg:w-1/2 lg:h-95 p-6 space-y-11 border-1 border-[var(--border-color)] rounded-2xl bg-[var(--blueish-background)] flex-shrink-0 snap-center flex flex-col justify-center items-center ${
                    index === testimonials.length - 1 ? "mr-5" : "mr-0"
                  }`}
                >
                  <div
                    className="size-30 mx-auto bg-center bg-cover bg-no-repeat rounded-full"
                    style={{ backgroundImage: `url(${testimonial.img})` }}
                  ></div>
                  <div className="space-y-6">
                    <p className="text-[var(--text-color)] text-sm sm:text-md md:text-md lg:text-md text-center">
                      {testimonial.quote}
                    </p>
                    <p className="text-gray-600 text-center text-base">
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
              // Interpolare pentru aria-label
              aria-label={t("testimonials_section_aria_label", {
                index: index + 1,
              })}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoniale;