import styled from 'styled-components';
import image from '../../images/defaultAva.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 30px;
  background-color: lightgray;

  @media screen and (min-width: 400px) {
    max-width: 400px;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const Home = () => {
  return (
    <main>
      <HomeContainer>
        <h1>Welcome to the app Tweets of Users</h1>
        <img src={image} alt="avatar boy" width={60} height={60} />
      </HomeContainer>
    </main>
  );
};
