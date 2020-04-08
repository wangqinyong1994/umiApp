/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import { Effect } from 'dva';

export interface UserInfoType {}

export interface AuthInfoType {}

export interface UserStateType {
  userInfo: UserInfoType | null;
  authInfo: AuthInfoType | null;
}

export interface UserModelType {
  namespace: string;
  state: UserStateType;
  reducers: {};
  effects: {};
}

const defaultState = {
  userInfo: null,
  authInfo: null,
  businessStatus: null,
  licence: {},
};

const UserModel: UserModelType = {
  namespace: 'user',

  state: defaultState,

  reducers: {},

  effects: {},
};

export default UserModel;
