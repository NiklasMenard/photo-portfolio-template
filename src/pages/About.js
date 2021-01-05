import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <ContentWrapper>
      <TextBox>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </p>
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
  p {
      margin: 1rem;
  }
`;
export default About;
