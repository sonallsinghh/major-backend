import { Module } from '@nestjs/common';
import { DailySaleController } from './dailysales.controller';
import { DailySaleService } from './dailysales.service';

@Module({
  controllers: [DailySaleController],
  providers: [DailySaleService],
})
export class DailySaleModule {}
