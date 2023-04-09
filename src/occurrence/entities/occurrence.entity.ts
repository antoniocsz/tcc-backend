export class OccurrenceEntity {
  id?: string;
  cameraId?: string;
  timestamp?: Date;
  frame?: string;
  polygons?: PolygonEntity[];
}

export class PolygonEntity {
  id?: string;
  occurrenceId?: string;
  class: string;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  conf: number;
}
