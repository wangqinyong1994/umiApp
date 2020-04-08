const { TQ_ENV, NODE_ENV } = process.env;

export interface IEnvConfig {
  baseURL?: string; // 接口域名
}

const envConfig: IEnvConfig = {};

if (TQ_ENV ? TQ_ENV === 'development' : NODE_ENV === 'development') {
  // 开发
  envConfig.baseURL = '';
}

if (TQ_ENV && TQ_ENV === 'alpha') {
  // 内测
  envConfig.baseURL = '';
}

if (TQ_ENV && TQ_ENV === 'beta') {
  // 公测
  envConfig.baseURL = '';
}

if (TQ_ENV ? TQ_ENV === 'production' : NODE_ENV === 'production') {
  // 生产
  envConfig.baseURL = '';
}

export default envConfig;
