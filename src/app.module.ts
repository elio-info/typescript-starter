import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//mine
import { Persons } from './persons/persons.module';


@Module({
  imports: [Persons],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
