import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert(t("contact_alert_fill_fields"));
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        alert(t("contact_alert_submit_error") + error);
      });
  };

  if (submitted) {
    return (
      <section id="contact-success" className="w-full px-4 py-20 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {t("contact_success_title")}
        </h3>
        <p className="mt-4 text-sm md:text-base">
          {t("contact_success_message")}
        </p>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="w-full px-4 md:px-6 xl:px-[12.5%] mb-20 md:mb-28 lg:mb-37.5 flex justify-center items-center"
    >
      <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[90%] max-w-250 xl:w-full flex flex-col justify-center items-center space-y-11">
        <div className="space-y-4 w-full m-2 md:m-10">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">
            {t("contact_section_title")}
          </h3>
          <p className="text-sm md:text-base text-center w-full max-w-[90%] mx-auto -mt-2 sm:mt-0">
            {t("contact_section_subtitle")}
          </p>
          <div className="w-full max-w-140 m-auto lg:max-w-full lg:flex lg:justify-center lg:items-stretch lg:gap-4 space-y-4 lg:space-y-0">
            <form
              className="w-full lg:w-[calc(60%)] p-4 sm:p-6 bg-(--blueish-background) border border-(--border-color) rounded-2xl space-y-4"
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <div className="w-full">
                <label htmlFor="name" className="mb-1.5 inline-block">
                  {t("contact_form_name_label")}
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="outline-none border border-(--border-color) rounded-lg h-13 w-full bg-white p-4"
                  placeholder={t("contact_form_name_placeholder")}
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="mb-1.5 inline-block">
                  {t("contact_form_email_label")}
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="outline-none border border-(--border-color) rounded-lg h-13 w-full bg-white p-4"
                  placeholder={t("contact_form_email_placeholder")}
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="message" className="mb-1.5 inline-block">
                  {t("contact_form_message_label")}
                </label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="outline-none border border-(--border-color) rounded-lg w-full bg-white p-4 resize-none"
                  placeholder={t("contact_form_message_placeholder")}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-21.5 h-11 bg-(--blue) text-white rounded-sm font-medium cursor-pointer"
              >
                {t("contact_form_submit_button")}
              </button>
            </form>
            <div className="w-full lg:w-[calc(40%)] bg-(--blue) p-4 sm:p-6 rounded-2xl space-y-4 flex flex-col justify-between items-center">
              <div className="w-full space-y-4">
                <h4 className="text-white! text-xl lg:text-2xl font-semibold pb-2">
                  {t("contact_info_title")}
                </h4>
                <div className="w-full">
                  <p className="text-neutral-300! lg:text-lg">{t("contact_info_email_label")}</p>
                  <p className="text-white! lg:text-lg">
                    contact@radardaunatori.ro
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-neutral-300! lg:text-lg">{t("contact_info_phone_label")}</p>
                  <p className="text-white! lg:text-lg">+40 760 522 326</p>
                </div>
                <div className="w-full">
                  <p className="text-neutral-300! lg:text-lg">{t("contact_info_social_label")}</p>
                  <div className="w-full space-x-8 mt-2">
                    <img
                      src="contact/facebook.svg"
                      alt={t("contact_info_facebook_alt")}
                      className="inline-block w-4"
                    />
                    <img
                      src="contact/instagram.svg"
                      alt={t("contact_info_instagram_alt")}
                      className="inline-block w-6"
                    />
                    <img
                      src="contact/twitter.svg"
                      alt={t("contact_info_twitter_alt")}
                      className="inline-block w-6"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end items-center">
                <img
                  src="contact/logo-contact.svg"
                  alt={t("contact_info_logo_alt")}
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