import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import 'modern-normalize/modern-normalize.css';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() =>
  import('pages/HomePage/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);

const Tweets = lazy(() =>
  import('pages/TweetsPage/Tweets').then(module => ({
    ...module,
    default: module.Tweets,
  }))
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
