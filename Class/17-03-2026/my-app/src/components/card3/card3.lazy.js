import { lazy, Suspense } from 'react';

const Lazycard3 = lazy(() => import('./card3'));

const card3 = (props) => (
  <Suspense fallback={null}>
    <Lazycard3 {...props} />
  </Suspense>
);

export default card3;
