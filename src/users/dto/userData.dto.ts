import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDataDto{

    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
}