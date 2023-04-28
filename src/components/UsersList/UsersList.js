import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserCard } from 'components/UserCard/UserCard';
import { Btn } from 'components/UserCard/UserCard.styled';
import { Loader } from 'components/Loader/Loader';
import { Container, UsersListStyled } from './UsersList.styled';

axios.defaults.baseURL = 'https://64496b35e7eb3378ca491a1e.mockapi.io';

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const isDesktop = window.matchMedia('(min-width: 1440px)');
  const limit = isDesktop ? 8 : 4;

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      try {
        const resp = await axios.get(`/users?limit=${limit}&page=${page}`);
        console.log(resp.data);
        setUsers(prev => [...prev, ...resp.data]);
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    getUsers();
  }, [page]);

  const loadMoreHandler = () => {
    setPage(page + 1);
  };
  console.log(users);
  return (
    <>
      {isLoading && <Loader />}
      {users.length > 0 ? (
        <Container>
          <UsersListStyled>
            {users.map(({ id, tweets, followers, avatar }) => (
              <UserCard
                key={id}
                avatar={avatar}
                tweets={tweets}
                followers={followers}
                id={id}
              />
            ))}
          </UsersListStyled>
          {users.length >= 4 && users.length < 24 && (
            <Btn type="button" onClick={() => loadMoreHandler()}>
              {isLoading ? <Loader /> : <span>load more</span>}
            </Btn>
          )}
        </Container>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
};
