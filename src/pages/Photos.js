import React from "react";
import styled from "styled-components";
import PhotosList from "../containers/PhotoList";

const importAll = (r) => {
  return r.keys().map(r);
};

const Content = () => {
  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <ContentWrapper>
      <PhotosList images={images} />
    </ContentWrapper>
  );
};

//styles
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  position: relative;
`;
export default Content;
