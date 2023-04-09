import { Injectable } from '@nestjs/common';
import { CreateOccurrenceDto } from '../dto/create-occurrence.dto';
import { IOccurrenceRepository } from '../interfaces/occurrence.interface';
import { OccurrenceEntity } from '../entities/occurrence.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OccurrenceRepository extends IOccurrenceRepository {
  constructor(private prisma: PrismaService) {
    super();
  }

  async create(data: CreateOccurrenceDto): Promise<void> {
    await this.prisma.occurrence.create({
      data: {
        cameraId: data.cameraId,
        timestamp: data.timestamp,
        frame: data.frame,
        polygons: {
          createMany: {
            data: [...data.polygons],
          },
        },
      },
    });
  }

  async findAll(): Promise<OccurrenceEntity[]> {
    const occurrences = await this.prisma.occurrence.findMany();
    return occurrences;
  }

  async findOne(id: string): Promise<OccurrenceEntity> {
    const occurrence = await this.prisma.occurrence.findUnique({
      where: {
        id: id,
      },
    });

    if (!occurrence) {
      throw new Error('Occurrence not found');
    }

    return occurrence;
  }
}
