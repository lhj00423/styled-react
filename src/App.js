import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import ButtonsTotal from './component/ButtonsTotal';
import Dialog from './component/Dialog';

const AppBlock = styled.div`
width : 512px;
margin : 0 auto;
margin-top : 4em;
border : 1px solid black;
padding : 1em;
`;

function App() {
  const [dialog , setDiglog] = useState(false);
  const onClick = ()=>{
    setDiglog(true);
  }
  const onConfirm = () =>{
    console.log('확인');
    setDiglog(false);
  }
  const onCancel = () =>{
    console.log('취소');
    setDiglog(false);
  }

  return (
    <>
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
      <div>
        <ButtonsTotal fullWidth>Button</ButtonsTotal>
      </div>
      <div>
        <ButtonsTotal fullWidth color = "pink" onClick={onClick}>삭제</ButtonsTotal>
      </div>
    </AppBlock>
    <Dialog title = "정말로 삭제하겠느냐?"
    confirmText = "삭제"
    cancelText = "취소"
    visible={dialog}
    onConfirm={onConfirm}
    onCancel={onCancel}
    >마지막이다 진짜 지울거임?</Dialog>
    </ThemeProvider>
    
    </>
  );
} 

export default App;
