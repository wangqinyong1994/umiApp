import React, { useEffect, useState } from 'react';
import { history, useRequest } from 'umi';
import { getCityList } from '@/services'
import styles from './index.less';

export default () => {

  const navTo = () => {
    history.push('population')
  }

  useEffect(() => {
    getCityList()
  }, [])

  return (
    <div>
      <h1 className={styles.title} onClick={navTo}>Page index</h1>
    </div>
  );
}
