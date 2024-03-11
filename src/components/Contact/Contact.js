import React, { useState } from "react";
import style from "./Contact.module.css";
import emailjs from "emailjs-com";
import ParticleBackground from "../ParticleBackground";
import ContactIllustration from "../../images/contact_illustration.svg";

const Result = () => {
  return (
    <p>Your messsage has been successfully sent. I will contact you soon</p>
  );
};

function Contact(props) {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_53lgs7q",
        "template_qnrfdpi",
        e.target,
        "user_gZvByIoWZrebOZMqfjUkx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // Mengambil data formulir
    const formData = new FormData(e.target);
    const fullName = formData.get("fullname");
    const email = formData.get("email");
    const message = formData.get("message");

    // Membuka aplikasi WhatsApp dengan prapesan
    window.location.href = `https://wa.me/6281911870796?text=Halo,%20saya%20${fullName}%0AEmail:%20${email}%0A${message}`;

    showResult(true);
    // e.target.reset();
  };

  return (
    <>
      <div className={style.particle}>
        <ParticleBackground />
      </div>
      <div className={style.contact}>
        <div className={style.contactImg}>
          <img
            src={ContactIllustration}
            alt="contact-illustration"
            className={style.contactHeroImg}
          />
        </div>
        <div className={style.contactForm}>
          <h2 className={style.formHeading}>Contact Me</h2>
          <p className={style.formSubtitle}>Leave Your Message</p>

          <form action="" onSubmit={sendEmail}>
            <span>Fullname</span>
            <input
              className={style.input}
              type="text"
              name="fullname"
              placeholder="Your Name"
              required
            />
            <span>Email</span>
            <input
              className={style.input}
              type="text"
              name="email"
              placeholder="Your Email"
              required
            />
            <span>Message</span>
            <textarea
              name="message"
              className={style.input}
              placeholder="Your Message"
              required
            ></textarea>

            <button className={style.btnWide}>Send</button>
            <div className={style.row}>{result ? <Result /> : null}</div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
