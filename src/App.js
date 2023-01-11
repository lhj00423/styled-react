import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import ButtonsTotal from './component/ButtonsTotal';

const AppBlock = styled.div`
width : 512px;
margin : 0 auto;
margin-top : 4em;
border : 1px solid black;
padding : 1em;
`;
function App() {
  return (
    <ThemeProvider theme={{
      palette:{
        blue:'#228be6',
        green:'#495057',
        pink:'#f06595'
      }
    }}> 
    <AppBlock>
      <div>
      <ButtonsTotal size = 'large'>BUTTON</ButtonsTotal>
      <ButtonsTotal>BUTTON</ButtonsTotal>
      <ButtonsTotal size ='small'>BUTTON</ButtonsTotal>
      </div>
      <div>
      <ButtonsTotal size = 'large' color='pink'>BUTTON</ButtonsTotal>
      <ButtonsTotal color='pink'>BUTTON</ButtonsTotal>
      <ButtonsTotal size ='small' color='pink'>BUTTON</ButtonsTotal>
      </div>
      <div>
      <ButtonsTotal size = 'large' color='green'>BUTTON</ButtonsTotal>
      <ButtonsTotal color='green'>BUTTON</ButtonsTotal>
      <ButtonsTotal size ='small' color='green'>BUTTON</ButtonsTotal>
      </div>
    </AppBlock>
    </ThemeProvider>
  );
} 

export default App;
