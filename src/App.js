import React from 'react';
import GlobalStyle from './global/GlobalStyle';
import myData from './myData';

import CVSection from './components/CVSection';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header data={myData} />
        <CVSection data={myData} />
        <Footer />
      </div>
    </>
  );
}

export default App;
