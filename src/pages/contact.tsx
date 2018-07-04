import { graphql } from 'gatsby'
import get from 'lodash/get';
import React from 'react';

import { MarkdownRemarkConnection } from '../../@types/graphql-types';
import SiteContainer from '../components/site-container/site-container';

import * as sharedStyles from '../styles/shared.module.scss';


interface IContactPageProps {
  location: { pathname: string; };
}

interface IContactPageState {
  contactForm: {
    name?: string;
    email?: string;
    message?: string;
  };
}

class ContactPage extends React.Component<IContactPageProps, IContactPageState> {
  render() {
    return (
      <div className={`${sharedStyles.contentBody} ${sharedStyles.contentPadding}`}>
        <h1>Contact</h1>
        <form
          name='contact'
          method='post'
          action='/thanks/'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Leave this empty: <input name='bot-field' />
            </label>
          </p>
          <p>
            <label>Your name:</label>
            <input type='text' name='name' onChange={this.handleChange}/>

          </p>
          <p>
            <label>Your email:</label>
              <input type='email' name='email' onChange={this.handleChange}/>

          </p>
          <p>
            <label> Message:</label>
            <textarea name='message' onChange={this.handleChange}/>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </form>
      </div>
    );
  }

  handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    this.setState({
      contactForm: {
        [ev.target.name]: ev.target.value
      }
    });
  }

  handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encodeBody({
        'form-name': 'contact',
        email: this.state.contactForm.email,
        name: this.state.contactForm.name,
        message: this.state.contactForm.message
      })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

  }

  encodeBody = (data: any) => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }
}

export default ContactPage;