import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Giuseppe Maldarelli</h2>
        <p>Ciao, Mi chiamo Giuseppe e sono un Freelance. <br />Sono laureato all&apos;<a href="https://www.uniba.it/">Università di Bari</a> in Informatica. <br /> Questo è il mio spazio web per presentarmi.</p>
      </header>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Approfondisci</Link> : <Link to="/about" className="button">Su di me</Link>}
        </li>
      </ul>
    </section>
    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Giuseppe Maldarelli <Link to="/">maldarelli.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
