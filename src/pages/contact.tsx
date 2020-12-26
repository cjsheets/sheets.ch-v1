/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Container } from '../layout';

export default function ContactPage() {
  const handleChange = () => null;
  const handleSubmit = () => null;

  return (
    <Container>
      <h1>Contact</h1>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <p hidden>
          <label>
            Leave this empty: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>Your name:</label>
          <input type="text" name="name" onChange={handleChange} />
        </p>
        <p>
          <label>Your email:</label>
          <input type="email" name="email" onChange={handleChange} />
        </p>
        <p>
          <label> Message:</label>
          <textarea name="message" onChange={handleChange} />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Container>
  );
}
