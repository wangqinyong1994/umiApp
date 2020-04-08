import React from 'react';
import styles from './BasicLayout.less';

const BasicLayout: React.FunctionComponent = ({
  // loadingUserInfo,
  children,
}) => (
  <>
    <div className={styles.basicLayout}>
      <nav className={styles.nav}>哈哈哈</nav>

      <div>{children}</div>
      {/* <div>{loadingUserInfo ? <PageLoading /> : children}</div> */}
    </div>
  </>
);

export default BasicLayout;
