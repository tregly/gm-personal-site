import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const styles = {
  paperContainer: {
    backgroundImage: 'http://localhost:3000/images/me.jpg',
  },
};
const Index = () => (
  <Main
    description={"Giuseppe Maldarelli's personal website. "}
  >
    <article className="post" id="index" style={styles.paperContainer}>
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Digital Innovation Consulting</Link></h2>
          <p>
            L&apos;innovazione digitale di cui hai bisogno
          </p>
        </div>
      </header>
      <p> Benvenuto sul mio sito personale. Non esitare a leggere di più <Link to="/about">su di me</Link>,
        oppure puoi consultare il mio {' '}
        <Link to="/resume">curriculum</Link>, {' '}
        <Link to="/projects">i miei progetti</Link>, {' '}
        or <Link to="/contact">contattarmi</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
