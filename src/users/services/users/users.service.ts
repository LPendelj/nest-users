import { Injectable } from '@nestjs/common';
import { UserDataDto } from 'src/users/dto/userData.dto';

@Injectable()
export class UsersService {

    fakeUsers = [{
        username: 'Pera',
        email: 'pera@mail'
    },
    {
        username: 'Mili',
        email: 'mili@mail'
    },
    {
        username: 'Joca',
        email: 'joca@mail'
    }]

    fetchUsers(){
        return this.fakeUsers
    }

    createUser(user: UserDataDto){
        this.fakeUsers.push(user)
        return user;
    }

    // fetchUserById(id){
    //     this.fakeUsers.filter(user => user.id ==)
    // }
}
