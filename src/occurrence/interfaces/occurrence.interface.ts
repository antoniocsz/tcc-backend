import { OccurrenceEntity } from '../entities/occurrence.entity';
import { CreateOccurrenceDto } from '../dto/create-occurrence.dto';

export abstract class IOccurrenceRepository {
  abstract create(data: CreateOccurrenceDto): Promise<void>;
  abstract findAll(): Promise<OccurrenceEntity[]>;
  abstract findOne(id: string): Promise<OccurrenceEntity>;
}
