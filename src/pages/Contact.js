import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContentWrapper>
      <TextBox>
        <h1>Contact</h1>
        <span>Phonenumber: </span>
        <span>Email: </span>

      </TextBox>
    </ContentWrapper>
  );
};

//styles
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 25vh;
  background-color: #74A57F;
  span {
      margin: 1rem;
  }
`;
export default Contact;
