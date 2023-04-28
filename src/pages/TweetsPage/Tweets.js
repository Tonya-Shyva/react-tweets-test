import { ScrollToTopButton } from 'components/ScrollToTop/ScrollToTop';
import { UsersList } from 'components/UsersList/UsersList';

export const Tweets = () => {
  return (
    <main>
      <UsersList />
      <ScrollToTopButton />
    </main>
  );
};
