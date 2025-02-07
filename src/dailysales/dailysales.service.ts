// revenue.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { DailySales } from './dailysales.model';

@Injectable()
export class DailySaleService {
  private readonly API_URL = 'http://localhost:3000/dailysales'; // URL of json-server

  // Get revenue by ID
  async getSales(): Promise<DailySales> {
    try {
      const response = await axios.get<DailySales[]>(this.API_URL);
      if (response.data.length === 0) {
        throw new HttpException('No revenue data found', HttpStatus.NOT_FOUND);
      }

      return response.data[0]; // Return the first (and only) entry
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Error fetching revenue data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
