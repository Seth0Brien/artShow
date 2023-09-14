import Display from './Display';
import Slideshow from './Slideshow';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';

function App() {

  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Display />
      break

    case "/slideshow":
      component = <Slideshow />
      break
  }

  return (
    <>
      <Header />
      {component}
    </>
  )
}

export default App;
