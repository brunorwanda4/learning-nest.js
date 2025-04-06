import { Injectable , Inject} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DB_CONN } from 'src/db/db-conn';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema'

@Injectable()
export class UsersService {
constructor(@Inject(DB_CONN) 
private readonly db: NodePgDatabase<typeof schema>){}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
