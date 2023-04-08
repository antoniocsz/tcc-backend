import { PolygonDTO } from './polygon.dto';

export class OccurrenceDto {
  id?: string;
  cameraId: string;
  timestamp: Date;
  frame: string;
  polygons?: PolygonDTO[];
}
