import 'modern-normalize/modern-normalize.css';
import { UsersList } from './UsersList/UsersList';
import { ScrollToTopButton } from './ScrollToTop/ScrollToTop';

export const App = () => {
  return (
    <>
      <UsersList />
      <ScrollToTopButton />
    </>
  );
};
