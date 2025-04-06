import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'])
    role: 'INTERN' | 'ENGINEER' | 'ADMIN'
}

export class UpdateUserDto extends PartialType(CreateUserDto) { }