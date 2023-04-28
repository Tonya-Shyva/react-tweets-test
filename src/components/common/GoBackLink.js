import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
