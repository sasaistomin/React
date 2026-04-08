import { lazy, Suspense } from 'react';

const Lazyform = lazy(() => import('./form'));

const form = (props) => (
  <Suspense fallback={null}>
    <Lazyform {...props} />
  </Suspense>
);

export default form;
