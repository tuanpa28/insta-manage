import LoadingPage from '@/app/loading';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Quên mật khẩu - Insta Dashboard',
  description: 'Quên mật khẩu - Insta Dashboard',
};

const ForgotPasswordPage = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <section>Quên mật khẩu</section>
    </Suspense>
  );
};

export default ForgotPasswordPage;
