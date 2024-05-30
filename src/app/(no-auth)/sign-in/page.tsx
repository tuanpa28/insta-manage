import LoadingPage from '@/app/loading';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Đăng nhập - Insta Dashboard',
  description: 'Đăng nhập - Insta Dashboard',
};

const SignInPage = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <section>Đăng nhập</section>
    </Suspense>
  );
};

export default SignInPage;
