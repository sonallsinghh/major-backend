// revenue.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { TableService } from './table.service';
import { Table } from './table.model';

@Controller('tables')
export class TableController {
  constructor(private readonly revenueService: TableService) {}

  @Get()
  async getTables(): Promise<Table> {
    return this.revenueService.getTables();
  }
}
