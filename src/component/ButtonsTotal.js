import React from 'react';
import styled, { css } from 'styled-components';

const ButtonsTotal = ({children,color,size, ...rest}) => {
    const StyledButton = styled.button`
    /*공통스타일*/
    display : inline-flex;
    outline : none;
    border : none;
    border-radius : 4px;
    color : white;
    font-weight : bold;
    cursor : pointer;
    padding: 1em; 
    justify-content : center;

    /*크기*/
    font-size : 1em;

    /*색상*/
    ${props => {
        const selected = props.theme.palette[props.color];
        return css`
        background : ${selected};
        `;
    }}
    /*크기 스타일*/
    ${props=>{
        return props.size === 'large' &&
        css`
        height : 3em;
        font-size : 1.25em; 
        width: 40%;
        `;
    }}
    ${props=>{
        return props.size === 'medium' &&
        css`
        height : 2.25em;
        font-size : 1em;
        width: 30%; 
        `;
    }}
    ${props=>{
        return props.size === 'small' &&
        css`
        height : 1.75em;
        font-size : 0.75em; 
        width: 15%;
        `;
    }}
    &:hover {
        background : #1c7ed6;
    }
    
    & + & {
        margin-left:1em;
    }
    `;
    return (
        <StyledButton color={color} size={size} {...rest}>{children}</StyledButton>
    );
};
ButtonsTotal.defaultProps = {
    color : 'blue',
    size : 'medium'
}
export default ButtonsTotal;


