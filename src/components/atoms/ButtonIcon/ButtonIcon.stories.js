import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.note};
`;

export default {
  title: 'atoms/ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <YellowBackground>
        <Story />
      </YellowBackground>
    ),
  ],
};

export const bulb = () => <ButtonIcon active icon={bulbIcon} />;
export const logout = () => <ButtonIcon icon={logoutIcon} />;
export const pen = () => <ButtonIcon icon={penIcon} />;
export const plus = () => <ButtonIcon icon={plusIcon} />;
export const twitter = () => <ButtonIcon icon={twitterIcon} />;
