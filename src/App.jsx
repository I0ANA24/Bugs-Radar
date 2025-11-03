import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Beneficii from "./components/Beneficii";
import PentruCompanii from "./components/PentruCompanii";
import Testimoniale from "./components/Testimoniale";
import IntrebariFrecvente from "./components/IntrebariFrecvente";
import ContactForm from "./components/ContactForm";

const App = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("RO");

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <Header />
      <main className="w-full">
        <Hero />
        <Beneficii />
        <PentruCompanii />
        <Testimoniale />
        <IntrebariFrecvente />
        <ContactForm />
      </main>
      <Footer />

      <div className="flex space-x-0 fixed bottom-4 right-4 rounded-2xl overflow-hidden shadow-md shadow-indigo-300">
        <button
          onClick={() => handleLanguageChange("ro")}
          className={`px-4 py-1.5 cursor-pointer font-medium ${
            i18n.language === "ro" ? "bg-(--blue) text-white" : "bg-gray-200"
          }`}
        >
          RO
        </button>
        <button
          onClick={() => handleLanguageChange("en")}
          className={`px-4 py-1.5 cursor-pointer font-medium ${
            i18n.language === "en" ? "bg-(--blue) text-white" : "bg-gray-200"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default App;
