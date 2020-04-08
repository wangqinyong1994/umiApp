import { AnyAction } from 'redux';
import { Router } from 'umi';
import { UserStateType } from '@/models/user';
import { LoginStateType } from './login';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    login?: boolean;
    user?: boolean;
    positionList?: boolean;
    options?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  login: LoginStateType;
  user: UserStateType;
}

export interface UmiProps extends Partial<Router> {
  dispatch: <T extends AnyAction>(action: T) => Promise<any> | T;
}
