import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Header, Navigation, StyledLink } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => (
  <>
    <Header>
      <Navigation>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </Navigation>
    </Header>
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </>
);
