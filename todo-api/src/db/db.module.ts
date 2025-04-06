import { Module } from '@nestjs/common';
import { DB_CONN } from './db-conn';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres'
import * as userSchema from '../users/schema'

@Module({
  exports: [DB_CONN],
  providers: [
    {
      provide: DB_CONN,
      useFactory: (configService: ConfigService) => {
        const pool = new Pool({
          connectionString: configService.getOrThrow('DB_CONN'),
        });
        return drizzle(pool, {
          schema: { ...userSchema }
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class DbModule { }
