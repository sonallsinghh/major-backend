// src/dishes/dish.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  serving: number;

  @Column()
  status: string;
}