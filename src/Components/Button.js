import React from 'react';
import styled from "styled-components/macro";




const Button = ({ onClick, children, buttonStyle, buttonSize }) => {


    const styles = ['btn-dark', 'btn-ghost']
    const sizes = ['btn-small', 'btn-medium'];

    const checkStyling = styles.includes(buttonStyle) ? buttonStyle : styles[0];
    const checkSizing = sizes.includes(buttonSize) ? buttonSize : sizes[0];



    return (
        <ButtonStlyed
            onClick={onClick}
            className={`btn ${checkStyling} ${checkSizing}`}
        >{children}</ButtonStlyed>
    )
}


const ButtonStlyed = styled.button`
  background: #f1356d;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`


export default Button
