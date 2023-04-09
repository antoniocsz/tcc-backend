import { IsNotEmpty, IsArray, IsNumber } from 'class-validator';

export class CreateOccurrenceDto {
  @IsNotEmpty()
  cameraId: string;

  @IsNotEmpty()
  timestamp: Date;

  @IsNotEmpty()
  frame?: string;

  @IsArray()
  polygons?: PolygonDto[];
}

export class PolygonDto {
  @IsNotEmpty()
  class: string;

  @IsNumber()
  @IsNotEmpty()
  x1: number;

  @IsNumber()
  @IsNotEmpty()
  x2: number;

  @IsNumber()
  @IsNotEmpty()
  y1: number;

  @IsNumber()
  @IsNotEmpty()
  y2: number;

  @IsNumber()
  @IsNotEmpty()
  conf: number;
}
