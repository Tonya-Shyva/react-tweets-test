import { useLocation } from 'react-router-dom';
import { ScrollToTopButton } from 'components/ScrollToTop/ScrollToTop';
import { UsersList } from 'components/UsersList/UsersList';
import { GoBackLink } from 'components/common/GoBackLink';

export const Tweets = () => {
  const location = useLocation();
  const backLinkLocation = location.state?.from ?? '/';
  return (
    <main>
      <GoBackLink to={backLinkLocation}>
        <span>&#8701;</span> Go back
      </GoBackLink>
      <UsersList />
      <ScrollToTopButton />
    </main>
  );
};
