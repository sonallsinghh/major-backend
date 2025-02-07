// revenue.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { Table } from './table.model';

@Injectable()
export class TableService {
  private readonly API_URL = 'http://localhost:3000/tables'; // URL of json-server

  // Get revenue by ID
  async getTables(): Promise<Table> {
    try {
      const response = await axios.get<Table[]>(this.API_URL);
      if (response.data.length === 0) {
        throw new HttpException('No revenue data found', HttpStatus.NOT_FOUND);
      }
      return response.data[0]; // Return the first (and only) entry
    } catch (error) {
      throw new HttpException(
        'Error fetching revenue data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
