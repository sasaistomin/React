import { lazy, Suspense } from 'react';

const Lazycard = lazy(() => import('./card'));

const card = (props) => (
  <Suspense fallback={null}>
    <Lazycard {...props} />
  </Suspense>
);

export default card;
