import { Body, Controller, Get, Param, ParseBoolPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserDataDto } from '../dto/userData.dto';
import { UsersService } from '../services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(
        private userService: UsersService
    ){

    }

    @Get()
    getUsers(){
        return this.userService.fetchUsers()
    } 

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: UserDataDto){
        console.log(userData)
        // response.send('Created!');
        return this.userService.createUser(userData);
    }

    @Get(':id')
    getUserById(@Param('id') id: string){
        console.log(id);
        return {id}
    }


}
