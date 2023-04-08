import { IsNotEmpty } from 'class-validator';
import { CreatePolygonDto } from './create-polygon.dto';

export class CreateOccurrenceDto {
  @IsNotEmpty()
  cameraId: string;

  @IsNotEmpty()
  timestamp: Date;

  @IsNotEmpty()
  frame?: string;

  @IsNotEmpty()
  polygons: CreatePolygonDto[];
}
