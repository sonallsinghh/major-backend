import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { Overview } from './overview.model'; // Ensure you have a SalesData interface or type defined

@Injectable()
export class OverviewService {
  private readonly API_URL = 'http://localhost:3000/overview;'; // URL of json-server

  // Get sales data
  async getSalesData(): Promise<Overview> {
    try {
      const response = await axios.get<Overview>(this.API_URL);
      console.log('SV REsponse: ', response);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Error fetching sales data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
