import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, UserRole } from '@prisma/client';
import { DbService } from 'src/db/db.service';
@Injectable()
export class UsersService {
  constructor(private readonly db: DbService) { }

  async create(createUserDto: Prisma.UserCreateInput) {
    try {
      const user = await this.db.user.findUnique({
        where: { email: createUserDto.email },
      });
      if (user) throw new NotFoundException('User already exists');
      if (createUserDto.role === UserRole.ADMIN) throw new NotFoundException('User cannot be created as admin');
      return await this.db.user.create({
        data: createUserDto,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new NotFoundException('User already exists');
      }
      throw error;
    }
  }

  async findAll(role?: UserRole) {
    try {
      if (role) return await this.db.user.findMany({
        where: {
          role: role,
        },
      });
      return this.db.user.findMany({});
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.db.user.findUnique({
        where: { id: id },
      });

      if (!user) throw new NotFoundException('User not found');
      if (user.role === UserRole.ADMIN) throw new NotFoundException('User is an admin, cannot be found by id');
      return user
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }

  async update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    try {
      const user = await this.findOne(id);
      if (user.role === UserRole.ADMIN) throw new NotFoundException('User is an admin, cannot be updated');
      if(!!updateUserDto.email) {
        const existingUser = await this.db.user.findUnique({
          where: { email: typeof updateUserDto.email === 'string' ? updateUserDto.email : undefined },
        });
        if (existingUser && existingUser.id !== id) throw new NotFoundException('Email already exists');
        if (updateUserDto.role === UserRole.ADMIN) throw new NotFoundException('User cannot be updated as admin');
      }
      const update_user = await this.db.user.update({
        where: { id: id },
        data: updateUserDto,
      });
      if (!update_user) throw new NotFoundException('User not found');
      return update_user
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const user = await this.db.user.delete({
        where: { id: id }
      });
      if (!user) throw new NotFoundException('User not found');
      return user
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }
}
