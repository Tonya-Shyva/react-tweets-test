import styled from 'styled-components';
import { Text } from 'components/UserCard/UserCard.styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 400px) {
    max-width: 400px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const UsersListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const EmptyText = styled(Text)`
  text-align: center;
  color: #4b2a99;
`;
