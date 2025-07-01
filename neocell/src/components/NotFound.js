import React from 'react';

function NotFound() {
  return (
    <section style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h2 style={{ fontSize: '2rem', color: 'var(--primary)' }}>404 - Page Not Found</h2>
      <p style={{ marginTop: '1rem' }}>
        Sorry, the page you’re looking for doesn’t exist. 
      </p>
      <p style={{ marginTop: '1rem' }}>
        <a href="/" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
          Return Home
        </a>
      </p>
    </section>
  );
}

export default NotFound;
