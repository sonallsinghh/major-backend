import { Module } from '@nestjs/common';
import { TableController } from './table.controller';
import { TableService } from './table.service';
import { Table } from './table.model';

@Module({
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}
