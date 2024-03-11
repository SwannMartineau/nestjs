import { Module } from '@nestjs/common';
import { PrixController } from './prix.controller';
import { PrixService } from './prix.service';

@Module({
  controllers: [PrixController],
  providers: [PrixService],
})
export class PrixModule {}