import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsrsModule } from './usrs/usrs.module';

@Module({
  imports: [UsrsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
