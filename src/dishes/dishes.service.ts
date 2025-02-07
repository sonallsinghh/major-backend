import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { Dish } from './dish';

@Injectable()
export class DishesService {
  private readonly API_URL = 'http://localhost:3000/dishes'; // URL of json-server

  // Get all dishes
  async findAll(): Promise<Dish[]> {
    const response = await axios.get<Dish[]>(this.API_URL);
    return response.data;
  }

  async create(name: string, price: number, servingQuantity: number, status: string): Promise<Dish> {
    const newDish = { name, price, servingQuantity, status }; // Include all fields
    const response = await axios.post<Dish>(this.API_URL, newDish);
    return response.data; // Now response should contain `id`
  }
}
