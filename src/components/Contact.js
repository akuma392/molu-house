import React, { useState } from 'react';

import Address from './Address';
import './iframe.css';

function Contact() {
  return (
    <>
      <section className="contact-hero flex justify-center items-center text-white font-bold text-4xl">
        Contact Us
      </section>
      <ContactUs />
      <div className="container1 ">
        <div className="wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14396.662155001757!2d85.0441039!3d25.5661588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xad1a825aecda8832!2sMolu%20House%20Cafe!5e0!3m2!1sen!2sin!4v1623052416012!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            className="absolute inset-0 w-full h-full"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export function ContactUs() {
  let initialMail = {
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    errors: {
      email: '',
      phone: '',
      subject: '',
      name: '',
      message: '',
    },
  };

  let [mail, sendMail] = useState(initialMail);
  let { name, email, phone, subject, message, errors } = mail;

  let [thanks, setThanks] = useState('');

  let handleMail = ({ target }) => {
    let { name, value } = target;
    let errors = mail.errors;

    switch (name) {
      case 'email':
        errors.email = value.includes('@') ? '' : 'Email is not valid';
        break;
      case 'name':
        errors.name = value.length < 4 ? 'Name cant be less than 4 letter' : '';
        break;
      case 'subject':
        errors.subject = value.length ? '' : 'Subject cant be empty';
        break;
      case 'phone':
        errors.phone = value.length < 10 ? 'Invalid phone number' : '';
        break;

      default:
        break;
    }

    sendMail({ errors, [name]: value });
  };
  console.log(mail, 'before sendmail');
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(mail, 'after sendmail');
    fetch('https://molu-house-mail.herokuapp.com/api/mail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message, phone }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          });
        }
        return res.json();
      })
      .then((data) => {
        sendMail({
          email: '',
          name: '',
          phone: '',
          subject: '',
          message: '',
          errors: '',
        });
        console.log(data, 'fetch');
      })
      .catch((errors) => {
        sendMail({ errors });
      });
  };

  return (
    <section className="p-5 my-5">
      <div className="container1">
        <h3 className="text-center font-bold text-2xl my-5">Get in touch</h3>
        <div className="flex">
          <Address />
          <form
            className="p-5 border-solid border-2 border-gray-200 shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="flex mb-2 mt-4 h-20">
              <div>
                <input
                  type="text"
                  placeholder="your name..."
                  name="name"
                  value={mail.name}
                  onChange={handleMail}
                  className=" border-solid h-12 border-2 border-gray-200 shadow-lg py-2 px-5 mr-5 placeholder-gray-500"
                />
                <p className="text-red-500 text-xs text-center">
                  {errors && errors.name}
                </p>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="enter your 10 digit number..."
                  name="phone"
                  value={mail.phone}
                  onChange={handleMail}
                  className=" border-solid border-2 h-12 border-gray-200 shadow-lg py-2 px-5  placeholder-gray-500"
                />
                <p className="text-red-500 text-xs text-center">
                  {errors && errors.phone}
                </p>
              </div>
            </div>
            <div className="flex mb-2 h-20">
              <div>
                <input
                  type="email"
                  placeholder="your valid email.."
                  name="email"
                  value={mail.email}
                  onChange={handleMail}
                  className=" border-solid h-12 border-2 border-gray-200 shadow-lg mr-5 py-2 px-5  placeholder-gray-500"
                  required
                />
                <p className="text-red-500 text-xs text-center">
                  {errors && errors.email}
                </p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="your subject..."
                  name="subject"
                  value={mail.subject}
                  onChange={handleMail}
                  className=" border-solid h-12 border-2 border-gray-200 shadow-lg py-2 px-5  placeholder-gray-500"
                />
                <p className="text-red-500 text-xs text-center">
                  {errors && errors.subject}
                </p>
              </div>
            </div>
            <textarea
              rows="5"
              placeholder="your message..."
              name="message"
              value={mail.message}
              onChange={handleMail}
              className=" border-solid border-2  border-gray-200 shadow-lg py-2 px-5  placeholder-gray-500 w-full"
            ></textarea>
            <p className="text-red-500 text-xs text-center">{errors.message}</p>
            <button className="bg-yellow-600 hover:bg-black hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded my-5">
              send your message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
