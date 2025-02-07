import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishesModule } from './/dishes/dishes.module';
import { RevenueModule } from './revenue/revenue.module';
import { DishesController } from './dishes/dishes.controller';
import { RevenueController } from './revenue/revenue.controller';
import { DishesService } from './dishes/dishes.service';
import { RevenueService } from './revenue/revenue.service';
import { OverviewModule } from './overview/overview.module';
import { OverviewController } from './overview/overview.controller';
import { OverviewService } from './overview/overview.service';
import { DailySaleModule } from './dailysales/dailysales.module';
import { DailySaleController } from './dailysales/dailysales.controller';
import { DailySaleService } from './dailysales/dailysales.service';
import { TableService } from './table/table.service';
import { TableController } from './table/table.controller';
import { TableModule } from './table/table.module';





@Module({
  imports: [DishesModule, RevenueModule, OverviewModule, DailySaleModule, TableModule],
  controllers: [AppController, DishesController, RevenueController, OverviewController, DailySaleController, TableController],
  providers: [AppService, DishesService, RevenueService, OverviewService, DailySaleService, TableService],
})
export class AppModule {}
