import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreatePolygonDto } from './create-polygon.dto';

export class CreateOccurrenceDto {
  @IsNotEmpty()
  cameraId: string;

  @IsNotEmpty()
  timestamp: Date;

  @IsNotEmpty()
  frame?: string;

  @IsOptional()
  polygons?: CreatePolygonDto[];
}
