import request from '@/utils/request';

// mock
export const getCityList = async () => {
  return request('/api/tags', {
    method: 'GET',
  });
};

// dev
