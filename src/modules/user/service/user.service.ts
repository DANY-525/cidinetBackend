import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../model/user.entity';



@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>){

    }
    async update(user: any) {
        return await this.userRepository.save(user.id);
    }
   

    async delete(id) {
       return await this.userRepository.delete(id);
    }
   

    async getUsers() {

        return await this.userRepository.find();
    }


    async getUserById(id) {
        return await this.userRepository.findOne(id);
    }

   
   async create(newUser) {

     return await this.userRepository.save(newUser);

    }





}
