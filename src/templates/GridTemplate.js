import React, { useState } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import UserPageTemplate from './UserPageTemplate';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 50%;
  z-index: 999;
  transform: rotate(${({ isOpen }) => (isOpen ? '135deg' : '0deg')});
  transition: transform 0.25s ease-in-out;
`;

// eslint-disable-next-line no-unused-vars
const GridTemplate = ({ children, pageContext }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeBar = () => {
    setIsOpen(false);
  };

  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="search" />
          <StyledHeading big as="h1">
            {pageContext}
          </StyledHeading>
          <StyledParagraph> 6 {pageContext} </StyledParagraph>
        </StyledPageHeader>
        <GridWrapper>{children}</GridWrapper>
      </StyledWrapper>
      <StyledButtonIcon
        icon={plusIcon}
        activeColor={pageContext}
        onClick={toggleOpen}
        isOpen={isOpen}
      />
      <NewItemBar isOpen={isOpen} close={closeBar} />
    </UserPageTemplate>
  );
};
export default withContext(GridTemplate);
