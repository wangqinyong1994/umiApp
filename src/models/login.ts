import { Reducer } from 'redux';
import { Effect, routerRedux } from 'dva';
import { setToken } from '@/utils';
import { ConnectState } from '@/models/connect';

export interface LoginStateType {
  refreshToken: string;
  token: string;
}

export interface LoginModelType {
  namespace: string;
  state: LoginStateType;
  reducers: {};
  effects: {};
}

const defaultState = {
  refreshToken: '',
  token: '',
};

const LoginModel: LoginModelType = {
  namespace: 'login',

  state: defaultState,

  reducers: {},

  effects: {},
};

export default LoginModel;
