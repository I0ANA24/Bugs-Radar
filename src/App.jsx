import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="w-screen flex flex-col items-center">
      <Header />
      <main className="w-full">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default App;

// 1h35min
