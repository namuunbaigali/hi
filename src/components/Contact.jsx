import { createElement, useRef } from "react";
import { content } from "../../../hi/src/Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="flex items-center justify-center text-white bg-dark_primary xs:grid-cols-2" id="contact">
      <Toaster />
      <div className="pb-4">
      
        <br />
       
          <div className="xs:grid xs:grid-cols-2 xs:pl-9">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center py-2"
              >
                <h4 className="pr-2 text-white">{createElement(content.icon)}</h4>
                <a className="" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Contact;
