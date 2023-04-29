import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import 'modern-normalize/modern-normalize.css';
import { Tweets } from 'pages/TweetsPage/Tweets';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() =>
  import('pages/HomePage/Home').then(module => ({
    ...module,
    default: module.Home,
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
