import React, { useCallback, useEffect, useMemo } from 'react';
import { history, Redirect, NavLink, Link } from 'umi';
import { connect } from 'dva';
import { getRedirect } from '@/utils';
import { UmiProps, ConnectState } from '@/models/connect';
import { LoginStateType } from '@/models/login';
import { UserInfoType } from '@/models/user';
import PageLoading from '@/components/PageLoading';
import styles from './BasicLayout.less';


interface BasicLayoutProps extends UmiProps {
    loadingUserInfo: boolean | undefined;
    modelLogin: LoginStateType;
    modelUserInfo: UserInfoType | null;
}

const BasicLayout: React.FunctionComponent<BasicLayoutProps> = ({
    // loadingUserInfo,
    children
}) => {
    return (
        <>
            <div className={styles.basicLayout}>
                <nav className={styles.nav}>
                    哈哈哈
                </nav>

                <div>{children}</div>
                {/* <div>{loadingUserInfo ? <PageLoading /> : children}</div> */}
            </div>
        </>
    );
};

const mapStateToProps = ({ loading, login, user: { userInfo } }: ConnectState) => ({

});

export default connect(mapStateToProps)(BasicLayout);
