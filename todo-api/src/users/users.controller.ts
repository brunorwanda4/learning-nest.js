import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ValidationPipe, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma, UserRole } from '@prisma/client';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { CreateUserDto, CreateUserSchema } from './dto/user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body(new ZodValidationPipe(CreateUserSchema)) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  

  @Get()
  findAll(@Query('role') role?: UserRole) {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: Prisma.UserUpdateInput) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
