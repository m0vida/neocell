import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Please complete the reCAPTCHA to prove you are human.');
      return;
    }

    emailjs.send(
      'service_6em59ul',     // replace with your service ID
      'template_cq2aacd',    // replace with your template ID
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      },
      'j6223EoBAhy1akOSM'      // replace with your public key (user ID)
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      alert('Your message was sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setCaptchaToken(null);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Something went wrong. Please try again later.');
    });
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>
            Name:<br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>
            Email:<br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>
            Message:<br />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </label>
        </div>
        <div style={{ margin: '1rem 0' }}>
          <ReCAPTCHA
            sitekey="6LciSHQrAAAAABoDWSMCkygDvkF47ylqcpX-_rrQ"  // replace with your reCAPTCHA site key
            onChange={handleCaptchaChange}
          />
        </div>
        <button type="submit" style={{
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          padding: '0.7rem 1.2rem',
          cursor: 'pointer'
        }}>
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
