import { Injectable } from '@nestjs/common';
import { Prisma, UserRole } from '@prisma/client';
import { DbService } from 'src/db/db.service';
@Injectable()
export class UsersService {
  constructor(private readonly db: DbService) { }

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.db.user.create({
      data: createUserDto,
    });
  }

  async findAll(role?: UserRole) {
    if (role) return this.db.user.findMany({
      where: {
        role: role,
      },
    });
    return this.db.user.findMany({});
  }

  async findOne(id: string) {
    const user = await this.db.user.findUnique({
      where: { id: id },
    });

    if (!user) throw new Error('User not found');
    if (user.role === UserRole.ADMIN) throw new Error('User is an admin, cannot be found by id');
    return user
  }

  async update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    const user = await this.findOne(id);
    if (user.role === UserRole.ADMIN) throw new Error('User is an admin, cannot be updated');

    const update_user =await this.db.user.update({
      where: { id: id },
      data: updateUserDto,
    });
    if (!update_user) throw new Error('User not found');
    return update_user
  }

  async remove(id: string) {
    const user = await this.db.user.delete({
      where: { id: id }
    });
    if (!user) throw new Error('User not found');
    return user
  }
}
