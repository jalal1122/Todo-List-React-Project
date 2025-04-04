import React from "react";
import styled from "styled-components";

const Checkbox = () => {
  return (
    <StyledWrapper>
      <label className="container">
        <input defaultChecked="checked" type="checkbox" />
        <div className="checkmark" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
  }

  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.6em;
    width: 1.6em;
    border-radius: 50%;
    background: #ffeded38;
    transition: all 0.2s ease;
  }

  .checkmark {
    opacity: 0.4;
  }

  .container input:checked ~ .checkmark {
    background: linear-gradient(144deg, #fdc700, #f54a00);
    opacity: 0.9;
    transition: all 0.2s ease;
  }

  .container input:not(:checked) ~ .checkmark {
    border: 1px solid black;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 0.61em;
    top: 0.43em;
    width: 0.25em;
    height: 0.5em;
    border: solid rgb(255, 255, 255);
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
  }
`;

export default Checkbox;
