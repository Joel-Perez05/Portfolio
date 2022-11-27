import React, { useRef } from 'react';
import emailjs from "@emailjs/browser"
import TrackVisibility from 'react-on-screen';

const ContactForm = (props) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_5mkolom',
        'template_s988c8s',
        form.current,
        'gZERQrHipWScN9Gfi'
      )
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          alert("Your message has been sent.")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required/>
      <input type="submit" value="Send" />
    </form>
    </div>
  )
}

export default ContactForm;