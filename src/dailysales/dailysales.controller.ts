// revenue.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { DailySaleService} from './dailysales.service';
import { DailySales } from './dailysales.model';

@Controller('dailysales')
export class DailySaleController {
  constructor(private readonly dailysalesService: DailySaleService) {}

  @Get()
  async getSales(): Promise<DailySales> {
    return this.dailysalesService.getSales();
  }
}
