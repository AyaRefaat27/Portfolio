import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">
            Let's talk about Your Project Details.
          </h3>

          <p className="contact__details">
            Don't like forms?! Send me an E-mail.
          </p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Enter Your E-mail"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Enter Your Subject"
            />
          </div>

          <div className="contact__form-div conatct__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Enter Your Message"
            ></textarea>
          </div>

          <a
            className="btn"
            style={{ width: "180px", textAlign: "center" }}
            href="mailto:ayarefaat200@gmail.com?subject=Hiring_Me&body=Hi,I am Aya Refaat.I am happy with your hiting ^-^."
          >
            Send Message{" "}
            <i
              className="icon-paper-plane"
              style={{ paddingLeft: "10px", fontWeight: "bold" }}
            ></i>
          </a>
        </form>
      </div>
    </section>
  );
}
