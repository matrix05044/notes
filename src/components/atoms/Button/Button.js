import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 0;
  background-color: ${({ theme, activeColor }) => theme[activeColor]};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.bold};
  font-size: 16;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #c2bbbb;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;
export default Button;
