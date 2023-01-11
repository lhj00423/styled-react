import React from 'react';
import styled,{css} from 'styled-components';

const CircleDiv = styled.div`
    width : 50px;
    height : 50px;
    background : ${props => props.color || 'black'};
    border-radius:50%;
    ${props => props.cute &&
        css`
            border-radius: 20px;
        `
    }
    ${props => props.big &&
    css`
      width:150px;
      height:150px;
    `
    } 
  `;
const Circle = () => {
    return (
        <div>
            <CircleDiv color = 'red'/>
            <CircleDiv cute/>
            <CircleDiv color= 'yellow' big/>
        </div>
    );
};

export default Circle;