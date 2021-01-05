import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <HeaderWrapper>
      <HeaderLink to="/photos">Photos</HeaderLink>
      <HeaderLink to="/contact">Contact</HeaderLink>
      <HeaderLink to="/about">About</HeaderLink>
    </HeaderWrapper>
  );
}


//styles

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: BlanchedAlmond;
`

const HeaderLink = styled(Link)`
  color: black;
  margin: 3rem;
  font size: 2rem;
`

export default Header;
