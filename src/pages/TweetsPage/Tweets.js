import { useLocation } from 'react-router-dom';
import { ScrollToTopButton } from 'components/ScrollToTop/ScrollToTop';
import { UsersList } from 'components/UsersList/UsersList';
import { GoBackLink } from 'components/common/GoBackLink';
import { MainContainer } from 'components/common/MainContainer';

export const Tweets = () => {
  const location = useLocation();
  const backLinkLocation = location.state?.from ?? '/';
  return (
    <main>
      <MainContainer>
        <GoBackLink to={backLinkLocation}>
          <span>&#8701;</span> Go back
        </GoBackLink>
        <UsersList />
        <ScrollToTopButton />
      </MainContainer>
    </main>
  );
};
