import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section>
      <h2>Contact</h2>
      <p>
        📧 <a href="mailto:akapellas@outlook.com">akapellas@outlook.com</a><br />
        💼 <a href="https://linkedin.com/in/alexkapellas" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
        💻 <a href="https://github.com/m0vida" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
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
