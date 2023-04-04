import { NextPage } from 'next';
import React from 'react';
import styles from './LoginPage.module.css';
import LoginModal from '../../components/LoginModal/LoginModal';
import { useRouter } from 'next/router';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { key } = router.query;
  console.log('key', key);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <LoginModal key={key as string} />
      </div>
    </div>
  );
};

export default LoginPage;
