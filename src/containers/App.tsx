import React from 'react';

// adds css reset
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/page.css';

// components
import Header from '../components/Header'
import Main from '../components/Main'

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
