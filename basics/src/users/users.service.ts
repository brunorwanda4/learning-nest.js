import { Injectable, NotFoundException } from '@nestjs/common';

export type userRole = 'INTERN' | 'ENGINEER' | 'ADMIN';
@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      role: 'ADMIN',
    },
  ];

  findAll(role?: userRole) {
    if (!role) return this.users
    const roleArrays = this.users.filter(user => user.role === role);
    if (roleArrays.length === 0) throw new NotFoundException('User role not found')
    return roleArrays
  }

  findOne(id : number) {
    const user = this.users.find(user => user.id === id)
    if (!user) throw new NotFoundException("User not found")
    return user
  }

  create(user : {name : string, email : string , role : userRole} ) {
    const usersByHighestId = [...this.users].sort((a ,b) => b.id = a.id);
    const newUser = {
        id : usersByHighestId[0].id + 1,
        ...user
    }
    this.users.push(newUser)
    return newUser
  }

  update(id : number , updateUser:{name ?: string, email ?: string, role ?: userRole}) {
    this.users = this.users.map(user => {
        if (user.id === id) {
            return {...user, ...updateUser}
        } 
        return user
    })
    return this.findOne(id)
  }

  delete(id : number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter(user => user.id !== id)
    return removedUser
  }
}
