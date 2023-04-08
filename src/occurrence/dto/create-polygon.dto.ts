import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePolygonDto {
  @IsNotEmpty()
  class: string;

  @IsNumber()
  x1: number;

  @IsNumber()
  x2: number;

  @IsNumber()
  y1: number;

  @IsNumber()
  y2: number;

  @IsNumber()
  conf: number;
}
