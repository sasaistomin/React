import { lazy, Suspense } from 'react';

const LazyMyheader = lazy(() => import('./Myheader'));

const Myheader = (props) => (
  <Suspense fallback={null}>
    <LazyMyheader {...props} />
  </Suspense>
);

export default Myheader;
