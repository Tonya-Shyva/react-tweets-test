import styled from 'styled-components';

export const Select = styled.select`
  margin-bottom: 26px;
  padding: 8px 15px;
  background-color: white;
  color: black;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  border: 1px solid #4b2a99;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 4px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }

  &:hover {
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  background-color: white;
  color: black;
`;
