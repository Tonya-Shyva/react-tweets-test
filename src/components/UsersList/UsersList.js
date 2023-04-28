import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserCard } from 'components/UserCard/UserCard';
import { Btn } from 'components/UserCard/UserCard.styled';
import { Loader } from 'components/Loader/Loader';
import { Dropdown } from 'components/DropDown/DropDown';
import { Container, EmptyText, UsersListStyled } from './UsersList.styled';

axios.defaults.baseURL = 'https://64496b35e7eb3378ca491a1e.mockapi.io';

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const limit = 8;

  useEffect(() => {
    const getTotalUsers = async () => {
      try {
        const resp = await axios.get('/users');
        setTotalUsers(resp.data);
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

  const storageFollowingUsers =
    JSON.parse(localStorage.getItem('following')) || [];
  const idStorageFollowingUsers = storageFollowingUsers.map(user => user.id);

  const followingFilter = totalUsers.filter(({ id }) =>
    idStorageFollowingUsers.includes(id)
  );

  const followFilter = totalUsers.filter(
    ({ id }) => !idStorageFollowingUsers.includes(id)
  );

  const filterTweets = filter => {
    switch (filter) {
      case 'follow':
        return followFilter;
      case 'following':
        return followingFilter;
      default:
        return users;
    }
  };

  return (
    <>
      {users.length > 0 ? (
        <Container>
          <Dropdown filter={filter} setFilter={setFilter} />
          {filterTweets(filter).length > 0 ? (
            <>
              <UsersListStyled>
                {filterTweets(filter).map(
                  ({ id, tweets, followers, avatar }) => (
                    <UserCard
                      key={id}
                      avatar={avatar}
                      tweets={tweets}
                      followers={followers}
                      id={id}
                    />
                  )
                )}
              </UsersListStyled>
            </>
          ) : (
            <Container>
              <EmptyText>
                You don't follow any User yet. Choose who you would like to
                follow!
              </EmptyText>
            </Container>
          )}
          {users.length >= limit && totalPages !== page && filter === 'all' && (
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
