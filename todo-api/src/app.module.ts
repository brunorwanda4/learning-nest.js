import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
  }),DbModule, UsersModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}
