import React from "react";
import { useTranslation } from "react-i18next";
import Question from "../ui/intrebari_frecvente/Question";

const IntrebariFrecvente = () => {
  const { t } = useTranslation();

  // Reconstruim dinamic obiectul 'questions' folosind traducerile
  const questions = {
    question1: {
      q: t("faq_question1_q"),
      a: t("faq_question1_a", { returnObjects: true }),
    },
    question2: {
      q: t("faq_question2_q"),
      a: t("faq_question2_a", { returnObjects: true }),
    },
    question3: {
      q: t("faq_question3_q"),
      a: t("faq_question3_a", { returnObjects: true }),
    },
    question4: {
      q: t("faq_question4_q"),
      a: t("faq_question4_a", { returnObjects: true }),
    },
    question5: {
      q: t("faq_question5_q"),
      a: t("faq_question5_a", { returnObjects: true }),
    },
  };

  return (
    <section
      id="faq"
      className="w-full px-4 md:px-6 xl:px-[12.5%] mb-20 md:mb-28 lg:mb-37.5 flex justify-center items-center relative"
    >
      <img
        src="intrebari_frecvente/bg-intrebari.png"
        alt={t("faq_section_bg_alt")}
        className="w-screen h-full max-h-[70vh] md:max-h-[80vh] xl:max-h-full absolute top-0 left-0 -z-10"
      />
      <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[90%] max-w-180 xl:w-full flex flex-col justify-center items-center border border-[var(--border-color)] rounded-2xl space-y-11 bg-white">
        <div className="space-y-2 w-full m-4 md:m-8 pt-4">
          <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[56px] font-bold px-4">
            {t("faq_section_title")}
          </h3>
          <p className="text-base md:text-lg xl:text-xl text-center w-full max-w-[90%] mx-auto -mt-2 sm:mt-0">
            {t("faq_section_subtitle")}
          </p>
        </div>
        <div className="w-full">
          <Question obj={questions.question1} />
          <Question obj={questions.question2} />
          <Question obj={questions.question3} />
          <Question obj={questions.question4} />
          <Question obj={questions.question5} last="1" />
        </div>
      </div>
    </section>
  );
};

export default IntrebariFrecvente;