import React from 'react';
import styled from 'styled-components'
import FlexWrapper from './components/FlexWrapper'
import Footer from './components/Footer'
import CVSection from './components/CVSection';
import myData from './myData';

const StyledHeader = styled.header`
  background: pink;
`

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <FlexWrapper justifyContent='center'>
          {/* hiier image van moi */}
          <div>
            <h1>Oliver Oenang</h1>
            <h3>front end developer</h3>
            <p>
              {myData.description}
            </p>
          </div>
        </FlexWrapper>
      </StyledHeader>

      <CVSection data={myData} />

      <Footer>
        <p>OLIVER OENANG <span>1900</span></p>
      </Footer>
    </div>
  );
}

export default App;
