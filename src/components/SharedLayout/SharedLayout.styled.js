import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 15px;
  color: #fff;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  font-weight: 600;
`;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: black;
  text-decoration: transparent;

  &.active {
    color: #ebd8ff;
    text-decoration: underline;
  }
`;
