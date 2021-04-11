import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logo from 'assets/icons/logo.svg';
import withContext from 'hoc/withContext';

const Logo = styled.img`
  width: 75px;
  height: 50px;
  display: block;
  background: url(${logo}) no-repeat;
  background-size: 100%;
`;

const SidebarWrapper = styled.div`
  width: 150px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, activeColor }) =>
    activeColor ? theme[activeColor] : theme.notes};
  margin: 0;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
`;

const NavWrapper = styled.div`
  width: 150px;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  margin-bottom: auto;
  margin-top: 100px;
`;

const Sidebar = ({ pageContext }) => (
  <SidebarWrapper activeColor={pageContext}>
    <Logo as={NavLink} to="/" />
    <NavWrapper>
      <ButtonIcon
        as={NavLink}
        to="/notes"
        icon={penIcon}
        activeclass="active"
      />
      <ButtonIcon
        as={NavLink}
        to="/twitters"
        icon={twitterIcon}
        activeclass="active"
      />
      <ButtonIcon
        as={NavLink}
        to="/articles"
        icon={bulbIcon}
        activeclass="active"
      />
    </NavWrapper>
    <ButtonIcon
      as={NavLink}
      to="/login"
      icon={logoutIcon}
      activeclass="active"
    />
  </SidebarWrapper>
);

export default withContext(Sidebar);
