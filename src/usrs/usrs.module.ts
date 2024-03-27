import { Module } from '@nestjs/common';
import { UsrsController } from './usrs.controller';
import { UsrsService } from './usrs.service';

@Module({
  controllers: [UsrsController],
  providers: [UsrsService]
})
export class UsrsModule {}
