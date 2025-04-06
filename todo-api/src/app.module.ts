import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DbModule } from './db/db.module';
import { SchemaModule } from './schema/schema.module';

@Module({
  imports: [UsersModule, DbModule,SchemaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
