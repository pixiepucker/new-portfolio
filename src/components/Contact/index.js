import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Valid email is required!');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-wrap m-4 text-smoky bg-isabelline md:w-50 md:h-50 bg-smoky/10"
    >
      <div className="font-light text-lg md:px-2 md:m-6 sm:m-3">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>

        <div className="my-3 mx-auto">
          <form action="https://submit-form.com/14agbb6X">
            <div className="p-2">
              <label htmlFor="name">Name:</label>
              <input
                className="m-1 p-1"
                type="name"
                name="name"
                defaultValue="Jane Doe"
                onBlur={handleChange}
              />
            </div>
            <div className="p-2">
              <label htmlFor="email">Email address:</label>
              <input
                className="m-1 p-1"
                type="email"
                name="email"
                defaultValue="example@email.com"
                onBlur={handleChange}
              />
            </div>
            <div className="p-2">
              <label htmlFor="message">Message:</label>
              <input
                className="m-1 p-1"
                type="message"
                name="message"
                defaultValue="Here's my idea!"
                onBlur={handleChange}
              />
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <div className="py-2">
                <button
                  type="submit"
                  className="text-white inline-block px-6 py-2.5 bg-indigo font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo/80 hover:shadow-lg focus:bg-indigo/70 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo/80 active:shadow-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
