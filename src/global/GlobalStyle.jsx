import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1 {
  font-size: 3em; 
  margin: 0;
  color: #202124;
  font-weight: 700;
  /* padding: 0 1.5rem; */
}

h2 {
  font-size: 2em; 
  margin: 0;
  margin-bottom: .5em;
}

h3 {
  font-size: 1.5em; 
  margin: 0;
}

p {
  font-size: 1.3rem;
}

`

export default GlobalStyle