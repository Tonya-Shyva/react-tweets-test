import { Routes, Route } from 'react-router-dom';

import 'modern-normalize/modern-normalize.css';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/HomePage/Home';
import { Tweets } from 'pages/TweetsPage/Tweets';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </>
  );
};
