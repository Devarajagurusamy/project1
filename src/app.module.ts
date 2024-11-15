import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://familiandbuser:focJJFECPXU5f9O3@cluster0-shard-00-00.pa5bd.mongodb.net:27017,cluster0-shard-00-01.pa5bd.mongodb.net:27017,cluster0-shard-00-02.pa5bd.mongodb.net:27017/devaraja?ssl=true&replicaSet=atlas-cejw98-shard-0&authSource=admin&retryWrites=true&w=majority"
), 
    UsersModule, AuthModule, 
  ],
})
export class AppModule { }


