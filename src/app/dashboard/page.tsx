import LoadingPage from '@/app/loading';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Insta Dashboard',
  description: 'Insta Dashboard',
};

const DashboardPage = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <section>Dashboard Page</section>
    </Suspense>
  );
};

export default DashboardPage;
