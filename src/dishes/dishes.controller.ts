import { Controller, Get, Post, Body } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { Dish } from './dish';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  findPopular() {
    return this.dishesService.findAll();
  }

  @Post('create')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        price: { type: 'number' },
        servingQuantity: { type: 'number' }, // Add serving quantity
        status: { type: 'string' }           // Add status
      }
    }
  })
  async createDish(@Body() dishData: { name: string, price: number, servingQuantity: number, status: string }): Promise<Dish> {
    const { name, price, servingQuantity, status } = dishData;
    return await this.dishesService.create(name, price, servingQuantity, status);
  }

  
}
