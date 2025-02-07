// revenue.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { RevenueService } from './revenue.service';
import { Revenue } from './revenue.model';

@Controller('revenue')
export class RevenueController {
  constructor(private readonly revenueService: RevenueService) {}

  @Get()
  async getRevenue(): Promise<Revenue> {
    return this.revenueService.getRevenue();
  }
}
