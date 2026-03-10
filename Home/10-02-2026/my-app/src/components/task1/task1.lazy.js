import { lazy, Suspense } from 'react';

const Lazytask1 = lazy(() => import('./task1'));

const task1 = (props) => (
  <Suspense fallback={null}>
    <Lazytask1 {...props} />
  </Suspense>
);

export default task1;
