import { lazy, Suspense } from 'react';

const LazyUserTable = lazy(() => import('./UserTable'));

const UserTable = (props) => (
  <Suspense fallback={null}>
    <LazyUserTable {...props} />
  </Suspense>
);

export default UserTable;
