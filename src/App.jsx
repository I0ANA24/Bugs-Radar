import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Beneficii from "./components/Beneficii";
import PentruCompanii from "./components/PentruCompanii";
import Testimoniale from "./components/Testimoniale";
import IntrebariFrecvente from "./components/IntrebariFrecvente";

const App = () => {
  return (
    <div className="w-screen flex flex-col items-center">
      <Header />
      <main className="w-full">
        <Hero />
        <Beneficii />
        <PentruCompanii />
        <Testimoniale />
        <IntrebariFrecvente />
      </main>
      <Footer />
    </div>
  );
};

export default App;
