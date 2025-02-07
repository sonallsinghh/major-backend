import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishesController } from './dishes.controller';
import { DishesService } from './dishes.service';
import { Dish } from './dish.entity';

@Module({
  controllers: [DishesController],
  providers: [DishesService],
})
export class DishesModule {}