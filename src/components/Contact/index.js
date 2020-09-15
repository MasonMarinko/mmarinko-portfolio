import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section>
      <h1 className="contact-title">Contact me</h1>
      <form className = 'contact-form' id="contact-form" onSubmit={handleSubmit}>
        <div className= "name-email">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onBlur={handleChange}
          />
        </div>
        </div>
        <div className="message-box">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
          {errorMessage && (
            <div className="error-message">
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
            <div className="flex-row-submit">
        <button className= "submit-button" type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
