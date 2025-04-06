import { CreateUserDto, UpdateUserDto } from './user.dto';
import { userRole, UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService){}

    @Get()
    findAll(@Query('role' ) role : 'Student' | 'Teacher' | 'Admin') {
       return this.usersService.findAll(role as userRole)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body(ValidationPipe) user : CreateUserDto ) {
      return this.usersService.create(user);
    }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body(ValidationPipe) user: UpdateUserDto) {
      return this.usersService.update(+id , user);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
      return this.usersService.delete(id)
    }
}
