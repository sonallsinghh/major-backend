import { Module } from '@nestjs/common';
import { RevenueController } from './revenue.controller';
import { RevenueService } from './revenue.service';
import { Revenue } from './revenue.model';

@Module({
  controllers: [RevenueController],
  providers: [RevenueService],
})
export class RevenueModule {}