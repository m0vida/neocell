import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>NeoCell | Alexandros Kapellas</h1>
        <p>Azure | Automation | Cloud & DevOps Engineer | Kubernetes</p>
      </header>

      <main>
        <section>
          <h2>About Me</h2>
          <p>
            I’m an IT/Cloud Solutions Architect specializing in Kubernetes, Azure DevOps, and automation. I love building secure and scalable platforms in the cloud.
          </p>
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
            <li><strong>Personal Website through Git & GitHub Actions</strong> – Azure Web Static Pages</li>
            <li><strong>Implementing IaC</strong> – Azure Resources Through IaC</li>
            <li><strong>Uptime Kuma</strong> – Monitored using Ingress + Persistent Volume</li>
            <li><strong>FortiGate Automation</strong> – Ansible & Terraform</li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            📧 <a href="mailto:akapellas@outlook.com">akapellas@outlook.com</a><br />
            💼 <a href="https://linkedin.com/in/alexkapellas" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
            💻 <a href="https://github.com/m0vida" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </section>
      </main>

      <footer>
        &copy; 2025 Alexandros Kapellas. Built with ❤️ for IaC Technologies.
      </footer>
    </>
  );
}

export default App;
