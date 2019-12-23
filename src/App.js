import React from 'react';
import styled from 'styled-components'
import FlexWrapper from './components/FlexWrapper'
import Footer from './components/Footer'
import CVSection from './components/CVSection';
import myData from './myData';
import Section from './components/Section';
import GlobalStyle from './global/GlobalStyle';

const StyledHeader = styled.header`
  background: pink;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Section>
          <StyledHeader>
            <FlexWrapper justifyContent='center'>
              {/* hiier image van moi */}
              <div>
                <h1>Oliver Oenang</h1>
                <h2>front end developer</h2>
                <p>
                  {myData.description}
                </p>
              </div>
            </FlexWrapper>
          </StyledHeader>
        </Section>

        <CVSection data={myData} />

        <Footer>
          <p>OLIVER OENANG <span>1900</span></p>
        </Footer>
      </div>
    </>
  );
}

export default App;
