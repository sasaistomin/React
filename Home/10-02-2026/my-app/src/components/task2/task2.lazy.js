import { lazy, Suspense } from 'react';

const Lazytask2 = lazy(() => import('./task2'));

const task2 = (props) => (
  <Suspense fallback={null}>
    <Lazytask2 {...props} />
  </Suspense>
);

export default task2;
