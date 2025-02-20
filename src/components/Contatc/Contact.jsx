import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <div className="contact_container">
        <p>Email: <a href="mailto:guiclemente2003@gmail.com">guiclemente2003@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/GuiSebax" target="_blank" rel="noopener noreferrer">github.com/GuiSebax</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/guilherme-clemente-29064b230/" target="_blank" rel="noopener noreferrer">linkedin.com/in/guilherme-clemente-29064b230/</a></p>
      </div>
    </section>
  );
};

export default Contact;
