import { lazy, Suspense } from 'react';

const Lazycard1 = lazy(() => import('./card1'));

const card1 = (props) => (
  <Suspense fallback={null}>
    <Lazycard1 {...props} />
  </Suspense>
);

export default card1;
