import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Funcție specială pentru a formata datele pentru Netlify
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne reîncărcarea paginii

    // Verificare simplă că toate câmpurile sunt completate
    if (!formData.name || !formData.email || !formData.message) {
      alert("Te rog completează toate câmpurile.");
      return;
    }

    // Trimite datele către Netlify în fundal
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        setSubmitted(true); // Afișează mesajul de succes
      })
      .catch((error) => {
        alert("A apărut o eroare la trimiterea formularului: " + error);
      });
  };

  // Dacă formularul a fost trimis, afișează un mesaj de mulțumire
  if (submitted) {
    return (
      <section id="testimoniale" className="w-full px-4 py-20 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Mulțumim pentru mesaj!
        </h3>
        <p className="mt-4 text-sm md:text-base">
          Am primit datele tale și vom reveni cu un răspuns în cel mai scurt timp.
        </p>
      </section>
    );
  }

  // Altfel, afișează formularul
  return (
    <section
      id="testimoniale"
      className="w-full px-4 md:px-6 xl:px-[12.5%] mb-20 md:mb-28 lg:mb-37.5 flex justify-center items-center"
    >
      <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[90%] max-w-250 xl:w-full flex flex-col justify-center items-center space-y-11">
        <div className="space-y-4 w-full m-2 md:m-10">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">
            Ești gata să preiei controlul?
          </h3>
          <p className="text-sm md:text-base text-center w-full max-w-[90%] mx-auto -mt-2 sm:mt-0">
            Fă primul pas către o gestionare inteligentă a capcanelor pentru
            rozătoare. Programează un demo și descoperă cum aplicația noastră
            simplifică procesul de deratizare.
          </p>
          <div className="w-full max-w-140 m-auto lg:max-w-full lg:flex lg:justify-center lg:items-stretch lg:gap-4 space-y-4 lg:space-y-0">
            <form
              className="w-full lg:w-[calc(60%)] p-4 sm:p-6 bg-(--blueish-background) border border-(--border-color) rounded-2xl space-y-4"
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field" // O măsură anti-spam
              onSubmit={handleSubmit}
            >
              {/* Aceste input-uri ascunse sunt ESENȚIALE pentru Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <div className="w-full">
                <label htmlFor="name" className="mb-1.5 inline-block">
                  Nume și prenume
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="outline-none border border-(--border-color) rounded-lg h-13 w-full bg-white p-4"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="mb-1.5 inline-block">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="outline-none border border-(--border-color) rounded-lg h-13 w-full bg-white p-4"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="message" className="mb-1.5 inline-block">
                  Spune-ne despre compania ta
                </label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message} // Corectat: formData, nu FormData
                  onChange={handleChange}
                  rows={4}
                  className="outline-none border border-(--border-color) rounded-lg w-full bg-white p-4 resize-none"
                  placeholder="Compania mea este..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-21.5 h-11 bg-(--blue) text-white rounded-sm font-medium cursor-pointer"
              >
                Trimite
              </button>
            </form>
            <div className="w-full lg:w-[calc(40%)] bg-(--blue) p-4 sm:p-6 rounded-2xl space-y-4 flex flex-col justify-between items-center">
              <div className="w-full space-y-4">
                <h4 className="text-white! text-xl lg:text-2xl font-semibold pb-2">
                  Contactează-ne
                </h4>
                <div className="w-full">
                  <p className="text-neutral-300! lg:text-lg">Email</p>
                  <p className="text-white! lg:text-lg">
                    contact@radardaunatori.ro
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-neutral-300! lg:text-lg">Phone</p>
                  <p className="text-white! lg:text-lg">+4076 522 326</p>
                </div>
                <div className="w-full">
                  <p className="text-neutral-300! lg:text-lg">Social Media</p>
                  <div className="w-full space-x-8 mt-2">
                    <img
                      src="contact/facebook.svg"
                      alt="facebook_icon"
                      className="inline-block w-4"
                    />
                    <img
                      src="contact/instagram.svg"
                      alt="instagram_icon"
                      className="inline-block w-6"
                    />
                    <img
                      src="contact/twitter.svg"
                      alt="twitter_icon"
                      className="inline-block w-6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <img
                  src="contact/logo-contact.svg"
                  alt="logo"
                  className="w-[60%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;