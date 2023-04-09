import { Injectable } from '@nestjs/common';
import { IOccurrenceRepository } from '../interfaces/occurrence.interface';
import { CreateOccurrenceDto } from '../dto/create-occurrence.dto';
import { OccurrenceEntity } from '../entities/occurrence.entity';

@Injectable()
export class OccurrenceInMemoryRepository extends IOccurrenceRepository {
  private occurrences: OccurrenceEntity[] = [];

  async create(data: CreateOccurrenceDto): Promise<void> {
    const newOccurrence = new OccurrenceEntity();

    Object.assign(newOccurrence, data);

    this.occurrences.push(newOccurrence);
  }

  async findAll(): Promise<OccurrenceEntity[]> {
    return this.occurrences;
  }

  async findOne(id: string): Promise<OccurrenceEntity> {
    const occurrence = await this.occurrences.find(
      (occurrence) => occurrence.id === id,
    );

    if (!occurrence) {
      throw new Error('Occurrence not found');
    }

    return occurrence;
  }
}
