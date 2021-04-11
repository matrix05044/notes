import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import linkicon from 'assets/icons/link.svg';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hoc/withContext';

const StyledDetailsWrapper = styled.div`
  padding: 50px;
  height: 800px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledHeaderWrapper = styled.div`
  position: relative;
`;
const StyledButtonsWrapper = styled.div``;
const StyledButton = styled(Button)`
  margin-bottom: 20px;
`;

const StyledHeading = styled(Heading)`
  margin: 0;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 10px;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  position: absolute;
  right: 25px;
  top: 25px;
  border-radius: 50%;
`;

const StyledLinkButton = styled.a`
  width: 47px;
  height: 47px;
  border-radius: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
  background: white url(${linkicon}) no-repeat;
  background-size: 50%;
  background-position: 50% 50%;
`;

const DetailsTemplate = ({
  pageContext,
  id,
  title,
  content,
  // twitterName,
  articleUrl,
  created,
}) => (
  <UserPageTemplate id={id}>
    <StyledDetailsWrapper>
      <StyledHeaderWrapper>
        <StyledHeading big>{title}</StyledHeading>
        <StyledParagraph>CREATED - {created} ago</StyledParagraph>
        {pageContext === 'twitters' && (
          <StyledAvatar src="https://i.pravatar.cc/300" />
        )}
        {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
      </StyledHeaderWrapper>
      <Paragraph>{content}</Paragraph>
      <StyledButtonsWrapper>
        <StyledButton type={pageContext}>close / save</StyledButton>
        <Button secondary>remove</Button>
      </StyledButtonsWrapper>
      <Link to="/"> go back </Link>
    </StyledDetailsWrapper>
  </UserPageTemplate>
);

export default withContext(DetailsTemplate);
