import { Controller, Post,Body } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {

constructor(private userService:UserService){


}


@Post()
async create(@Body() newUser:any){




    return newUser;


}











}
