import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import linkicon from 'assets/icons/link.svg';
import { Redirect } from 'react-router-dom';
import { removeItem as removeItemAction } from 'actions';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  position: relative;
  background-color: ${({ theme, activeColor }) =>
    activeColor ? theme[activeColor] : 'white'};

  :first-of-type {
    z-index: 5;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DataInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
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

const Card = ({
  pageContext,
  title,
  created,
  // twitterName,
  articleUrl,
  content,
  id,
  removeItem,
}) => {
  const [redirect, setRedirect] = useState(false);

  const handleCardClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={`${pageContext}/${id}`} />;
  }
  return (
    <StyledWrapper onClick={handleCardClick}>
      <InnerWrapper activeColor={pageContext}>
        <StyledHeading>{title}</StyledHeading>
        <DataInfo>{created}</DataInfo>
        {pageContext === 'twitters' && (
          <StyledAvatar src="https://i.pravatar.cc/300" />
        )}
        {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <Button onClick={() => removeItem(pageContext, id)} secondary>
          remove
        </Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  // twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  pageContext: 'notes',
  // twitterName: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
