import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "23aa90e4-cc9f-4526-8502-787241932081");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
    alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img src="" alt="" /> */}
      </div>

      <div className="contact-section">
        {/* Left Section */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on. You can
            contact me anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <img src={mail_icon} alt="email" />
              <p>priyakapoor2200@gmail.com</p>
            </div>
            <div className="contact-detail-item">
              <img src={call_icon} alt="call" />
              <p>6284909842</p>
            </div>
            <div className="contact-detail-item">
              <img src={location_icon} alt="location" />
              <p>Patiala, Punjab</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            id="message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
