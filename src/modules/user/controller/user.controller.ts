import { Param } from '@nestjs/common';
import { Controller, Post,Body,Get,Delete,Put} from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {

constructor(private userService:UserService){


}
@Post()
async create(@Body() newUser:any){
    return await this.userService.create(newUser);
    //return newUser;
}


@Get()
async getUsers(){
    return await this.userService.getUsers();
    //return newUser;
}



@Get(':id')
async getUserById(@Param('id') id){
    return await this.userService.getUserById(id);
    //return newUser;
}

@Delete(':id')

async delete(@Param('id') id){

    console.log(id+"id pasado")
    return await this.userService.delete(id);

} 

@Put()

async update(@Body() user:any){

  
    return await this.userService.update(user);

} 












}
