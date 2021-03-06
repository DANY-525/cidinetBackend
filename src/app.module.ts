import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './modules/user/user.module';




@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'root',
    //password: '',
    database: 'cidinet',
    entities: ["dist/**/*.entity{.ts,.js}"],
    //synchronize: true,
  }),UserModule

   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  constructor(private connection: Connection) {

  }

}
