import { lazy, Suspense } from 'react';

const Lazycliker = lazy(() => import('./cliker'));

const cliker = (props) => (
  <Suspense fallback={null}>
    <Lazycliker {...props} />
  </Suspense>
);

export default cliker;
