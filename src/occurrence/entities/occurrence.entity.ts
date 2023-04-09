import { PolygonEntity } from './polygon.entity';

export class OccurrenceEntity {
  id?: string;
  cameraId?: string;
  timestamp?: Date;
  frame?: string;
  polygons?: PolygonEntity[];
}
