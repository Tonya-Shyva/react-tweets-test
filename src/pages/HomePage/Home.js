import { Container } from 'components/UsersList/UsersList.styled';
import image from '../../images/defaultAva.png';
export const Home = () => {
  return (
    <main>
      <Container>
        <h1>Welcome to the app Tweets of Users</h1>
        <img src={image} alt="avatar boy" />
      </Container>
    </main>
  );
};
