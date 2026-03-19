import { lazy, Suspense } from 'react';

const Lazycard2 = lazy(() => import('./card2'));

const card2 = (props) => (
  <Suspense fallback={null}>
    <Lazycard2 {...props} />
  </Suspense>
);

export default card2;
