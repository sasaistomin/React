import { lazy, Suspense } from 'react';

const Lazyform-macet = lazy(() => import('./form-macet'));

const form-macet = (props) => (
  <Suspense fallback={null}>
    <Lazyform-macet {...props} />
  </Suspense>
);

export default form-macet;
