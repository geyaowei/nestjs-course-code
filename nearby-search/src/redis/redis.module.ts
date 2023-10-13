import { Module } from '@nestjs/common';
import { createClient } from 'redis';
import { RedisService } from './redis.service';

@Module({
  providers: [
    RedisService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client = createClient({
            socket: {
                host: '192.168.10.120',
                port: 6379
            },
            password: '123456'
        });
        await client.connect();
        return client;
      }
    }
  ],
  exports: [RedisService]
})
export class RedisModule {}