import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(@Query('role' ) role : 'Student' | 'Teacher' | 'Admin') {
        if (role) {
            return [{ id: 1, name: 'John Doe', role }];
        }
        return [];
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id };
    }

    @Post()
    create(@Body() user: {}) {
      return user;
    }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() user: {}) {
      return { id, ...user };
    }
}
