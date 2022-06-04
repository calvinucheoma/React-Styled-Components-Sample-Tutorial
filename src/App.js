import './App.css';
import StyledButton, {FancyButton, SubmitButton, DarkButton, LightButton} from './styled components/Button/Button';
import {ThemeProvider, createGlobalStyle} from 'styled-components';

function App() {

  const theme= {
    dark: {
      primary: '#000',
      text: '#fff'
    },
    light: {
      primary: '#fff',
      text: '#000',
    },
    fontFamily: 'Segoe UI',
  };

  const GlobalStyle = createGlobalStyle`
    button {
      font-family: ${(props) => props.theme.fontFamily};
    }
  `;

  return (

    <ThemeProvider theme={theme}>
    <GlobalStyle/>

    <div>

      <StyledButton> Button </StyledButton>
      <StyledButton variant='outline'> Button </StyledButton>
      <FancyButton as='a'>Button</FancyButton> {/*changes the element in the browser now to an <a> tag instead of a <button> tag like the others */}
      <SubmitButton> Button </SubmitButton>
      {/* <AnimatedLogo src={logo}/> */}
      <DarkButton>Button</DarkButton>
      <LightButton>Button</LightButton>

    </div>

  </ThemeProvider>

  );

};


export default App;
