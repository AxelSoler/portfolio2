import React from 'react';
import { useForm } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('contactForm');
  if (state.succeeded) {
    return <p>Thank you for the message!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="title">Let’s chat!</h2>
      <p className="description">
        If you have an application you are interested in developing, a
        {' '}
        feature that you need built or a project that needs coding. I’d love to help with it.
      </p>
      <label htmlFor="username">
        What is your name?
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
      </label>
      <label htmlFor="email">
        Email Address
        <input
          type="email"
          id="email"
          name="userEmail"
          placeholder="email@something.com"
        />
      </label>
      <label htmlFor="message">
        Send me your message
        <textarea
          name="message"
          id="message"
          placeholder="Enter text here"
        />
      </label>
      <button
        id="submitButton"
        type="submit"
        disabled={state.submitting}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
