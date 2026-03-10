import { lazy, Suspense } from 'react';

const LazyMyList = lazy(() => import('./MyList'));

const MyList = (props) => (
  <Suspense fallback={null}>
    <LazyMyList {...props} />
  </Suspense>
);

export default MyList;
