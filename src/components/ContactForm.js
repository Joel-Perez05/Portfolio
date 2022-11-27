import React, { useRef } from 'react';
import { Col } from 'react-bootstrap';
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
    <div className='contact' id='connect'>
      <h2>Get In Touch With Me</h2>
      <TrackVisibility>
        { ({isVisible}) => 
        <form className={isVisible? "animate__animated animate__zoomIn" : "animate__animated animate__zoomOut"} ref={form} onSubmit={sendEmail}>
          <Col size={12} className="px-1">
            <input type="text" name='user_name' placeholder="Name" required/>
          </Col>
          <Col size={12} className="px-1">
            <input type="email" name='user_email' placeholder="Email Address" required/>
          </Col>
          <Col size={12} className="px-1">
            <textarea rows="6" placeholder="Message" name='message' required></textarea>
          </Col>
          <Col>
            <button type="submit"><span>Send</span></button>
          </Col>
        </form>
        }
      </TrackVisibility>
    </div>
  )
}

export default ContactForm;