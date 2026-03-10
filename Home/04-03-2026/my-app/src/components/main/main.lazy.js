import { lazy, Suspense } from 'react';

const Lazymain = lazy(() => import('./main'));

const main = (props) => (
  <Suspense fallback={null}>
    <Lazymain {...props} />
  </Suspense>
);

export default main;
