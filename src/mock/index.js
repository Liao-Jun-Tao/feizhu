import Mock from 'mockjs';


Mock.setup({
    timeout: '50 - 1000' //随机的延迟时间,  模式请求耗时
  });

  Mock.mock(/\/sidebar/, 'get', () => {
    return {
      code: 0,
      result: swiperList
    };
  });