import { NextPage } from 'next';
import React from 'react';
import styles from './LoginPage.module.css';
import LoginModal from '../../components/LoginModal/LoginModal';

const LoginPage: NextPage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <LoginModal />
      </div>
    </div>
  );
};

export default LoginPage;
