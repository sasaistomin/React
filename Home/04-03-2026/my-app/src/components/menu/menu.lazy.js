import { lazy, Suspense } from 'react';

const Lazymenu = lazy(() => import('./menu'));

const menu = (props) => (
  <Suspense fallback={null}>
    <Lazymenu {...props} />
  </Suspense>
);

export default menu;
