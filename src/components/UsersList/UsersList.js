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
  const [totalPages, setTotalPages] = useState(null);
  const limit = 8;

  useEffect(() => {
    const getTotalUsers = async () => {
      try {
        const resp = await axios.get('/users');
        setTotalPages(Math.ceil(Number(resp.data.length) / 8));
      } catch (e) {
        setError(e.message);
      }
    };
    getTotalUsers();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      try {
        const resp = await axios.get(`/users?limit=${limit}&page=${page}`);
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
          {users.length >= limit && totalPages !== page && (
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
