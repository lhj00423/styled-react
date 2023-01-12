import React, { useEffect, useState } from 'react';
import styled, { keyframes ,css } from 'styled-components';
import ButtonsTotal from './ButtonsTotal';


//fadeIn - keyframes만들기
const fadeIn = keyframes`
    from {opacity : 0}
    to{ opacity : 1}
`;

//fadeOut - keyframes만들기
const fadeOut = keyframes`
    from {opacity : 1}
    to{ opacity : 0}
`;

//sideUp - keyframes 만들기
const slideUp = keyframes`
    from {transform : translateY(200px)}
    to {transform : translateY(0px)}
`;
//slideDown - keyframes 만들기
const slideDown = keyframes`
    from {transform : translateY(0px)}
    to {transform : translateY(200px)}
`;

const DarkBackground = styled.div`
    position : fixed;
    left: 0;
    top: 0;
    width: 100%;
    height : 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
    animation-duration : 0.5s;
    animation-name : ${fadeIn};
    animation-fill-mode : forwards;
    ${props=>
        props.disappear &&
        css`
        animation-name : ${fadeOut};
        `}
`;
//컨펌창 블럭 (컴포넌트 만들때는 대문자로 시작해야함)
const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;
    h3 {
        margin: 0;
        font-size: 1.5rem;
    }
    p { 
        font-size: 1.125rem;
    }
    animation-duration : 0.5s;
    animation-name : ${slideUp};
    animation-fill-mode : forwards;
    ${props=>
        props.disappear &&
        css`
        animation-name : ${slideDown};
        `} 
`;

const Dialog = ({title, children, confirmText, cancelText, visible,onConfirm,onCancel }) => {
    //현재 트랜지션 효과를 보여주고 있는중이라는 상태를 의미
    const [animate,setAnimate] = useState(false);
    //실제로 컴포넌트가 사라지는 시점을 지연시키기 위한 상태
    const [localVisible, setlocalVisible] = useState(visible);
    //useEffect 작성
    //visible값이 true에서 false로 바뀌는 시점을 감지하여 animate값을 true로 변경
    //setTimeout함수를 사용하여 0.5초에 이후에 false로 변경
    useEffect(()=>{ 
        //visble 값이 true->false로 되는 것을 확인
        if(localVisible && !visible){
            setAnimate(true);
            setTimeout(()=>setAnimate(false),500);
        }
        setlocalVisible(visible); 
    },[localVisible,visible]) 
    if(!animate && !localVisible) return null;
    return (
        <div>
            <DarkBackground disappear ={!visible}>
                <DialogBlock disappear ={!visible}>
                    <h3>{title}</h3>
                    <p>{children}</p> 
                    <div>
                        <ButtonsTotal color="green" onClick={onConfirm} >{confirmText}</ButtonsTotal>
                        <ButtonsTotal color="pink" onClick={onCancel} >{cancelText}</ButtonsTotal>
                    </div>
                </DialogBlock>
            </DarkBackground>
        </div>
    );
};

Dialog.defaultProps = {
    confirmText: '확인',
    cancelText: '취소'
  };




export default Dialog;