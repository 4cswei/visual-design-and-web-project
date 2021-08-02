import React, { useState } from "react";
import Input from "../Input/Input";
import PText from "../PText/PText";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [log, setLog] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLog("Thank you! Your message has been sent.");
  }

  console.log("Name", name);
  console.log("Email", email);
  console.log("Subject", subject);
  console.log("Message", message);

  return (
    <div>
      <div className="container-form">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            id="name"
            value={name}
            placeholder={"Enter your name"}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            id="email"
            value={email}
            placeholder={"Enter your email address"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            id="subject"
            value={subject}
            placeholder={"Enter the subject"}
            onChange={(e) => setSubject(e.target.value)}
          />
          <div className="input-field">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              message="message"
              value={message}
              placeholder={"Enter your message"}
              onChange={(e) => setMessage(e.target.value)}
              required="required"
            />
          </div>
          <div className="form-btn">
            <button type="submit" className="button">
              Send
            </button>
            <PText>{log}</PText>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
