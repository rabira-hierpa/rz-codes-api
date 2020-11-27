import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'postDB',
  connector: 'postgresql',
  url: '',
  host: 'rz-codes.com',
  port: 5432,
  user: 'rzcodesc_rzcodes_admin',
  password: 'hhpNyQihxGzri35',
  database: 'rzcodesc_rzcodes_main'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PostDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'postDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.postDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
