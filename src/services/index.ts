import request from '@/utils/request';

// mock
export const getCityList = async () =>
  request('/api/tags', {
    method: 'GET',
  });

// dev
