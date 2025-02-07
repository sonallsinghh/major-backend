// revenue.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { Revenue } from './revenue.model';

@Injectable()
export class RevenueService {
  private readonly API_URL = 'http://localhost:3000/revenue'; // URL of json-server

  // Get revenue by ID
  async getRevenue(): Promise<Revenue> {
    try {
      const response = await axios.get<Revenue[]>(this.API_URL);
      if (response.data.length === 0) {
        throw new HttpException('No revenue data found', HttpStatus.NOT_FOUND);
      }
      return response.data[0]; // Return the first (and only) entry
    } catch (error) {
      throw new HttpException('Error fetching revenue data', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
