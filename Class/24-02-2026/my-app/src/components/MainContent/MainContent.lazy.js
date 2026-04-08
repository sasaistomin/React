import { lazy, Suspense } from 'react';

const LazyMainContent = lazy(() => import('./MainContent'));

const MainContent = (props) => (
  <Suspense fallback={null}>
    <LazyMainContent {...props} />
  </Suspense>
);

export default MainContent;
