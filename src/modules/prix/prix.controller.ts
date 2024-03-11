import { Controller, Get } from '@nestjs/common';
import { PrixService } from './prix.service';

@Controller('prix')
export class PrixController {
  constructor(private readonly prixService: PrixService) {}

  @Get()
  getPrixData() {
    return this.prixService.getPrixData();
  }
}