import React from 'react';

export default function ContactForm() {
  return (
    <div className="contact__form">
      <div className="contact__form-inner">
        <form method="post" action="#">
          <label>
            <input
              placeholder="First Name*"
              type="text"
              firstname="firstname"
              id="firstname"
            />
          </label>
          <label>
            <input
              placeholder="Last Name*"
              type="text"
              firstname="lastname"
              id="lastname"
            />
          </label>
          <label>
            <input placeholder="Email*" type="email" name="email" id="email" />
          </label>
          <label>
            <input placeholder="Phone*" type="text" name="phone" id="phone" />
          </label>
          <label>
            <textarea
              placeholder="Message*"
              name="message"
              id="message"
              rows="5"
            />
          </label>
          <button type="submit">Submit +</button>
          {/* <input type="reset" value="Clear" /> */}
        </form>
      </div>
    </div>
  );
}
