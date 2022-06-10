import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1648288882537_103',
  koa: {
    port: 7001,
  },
  orm: {
    /**
     * 单数据库实例
     */
    type: 'postgres',
    host: '',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: undefined,
    synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: true,
  },
  cors: {
    credentials: false,
  },
  jsonp: {
    callback: 'jsonp',
    limit: 512,
  },
} as MidwayConfig;
