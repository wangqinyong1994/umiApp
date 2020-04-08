import React, { useEffect } from 'react';
import { history } from 'umi';
import { getCityList } from '@/services';
import styles from './index.less';

export default () => {
  const navTo = () => {
    history.push('population');
  };
  console.log('aaaa');

  useEffect(() => {
    getCityList();
  }, []);

  return (
    <div>
      <h1 className={styles.title} onClick={navTo}>
        Page index
      </h1>
    </div>
  );
};
