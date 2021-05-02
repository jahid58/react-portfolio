import React, { useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { GrFacebook } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "./Email";

const Contact = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [buttonText, setButtonText] = useState("Send Message");

  const onSubmit = (data, e) => {
    setButtonText("...sending");
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        setButtonText("sent");
        reset();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div className="contact-page">
      <div className=" row  align-items-center ">
        <div className="col-md-6 pb-4">
          <h4 className="text-success">Tell me how can I help you:</h4>
          <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <br />
            <br />
            <input
              placeholder="Name"
              className="form-control"
              type="Text"
              {...register("name", { required: true })}
            />

            <br />
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <br></br>
            <textarea
              type="Text"
              className="form-control"
              placeholder="Message"
              {...register("message", { required: true })}
            />
            <br></br>
            <input
              type="submit"
              className="btn btn-primary"
              value={buttonText}
            />
          </form>
        </div>
        <div className="col-md-6  also-find ">
          <h5>You also find me in -</h5>
          <div>
            <a
              className="btn btn-primary mr-2 mt-2 "
              target="_blank"
              href="https://www.linkedin.com/in/jahid-hasan-876578203/"
            >
              <GrLinkedin /> Linkedin
            </a>
            <a
              className="btn btn-secondary mr-2 mt-2"
              target="_blank"
              href="https://github.com/jahid58"
            >
              <GoMarkGithub /> Github
            </a>
            <a
              className="btn btn-primary mt-2"
              target="_blank"
              href="https://www.facebook.com/jahid hasan/"
            >
              <GrFacebook /> Facebook
            </a>
          </div>
          <div className="mt-4">
            <p>
              <strong>Address:</strong>
              <br />
              Adorshonagar,Badda Link Road
              <br />
              Govt. Titumir College
              <br />
              Dhaka-1000, Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
