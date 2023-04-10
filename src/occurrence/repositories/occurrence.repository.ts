import { Injectable } from '@nestjs/common';
import { CreateOccurrenceDto } from '../dto/create-occurrence.dto';
import { IOccurrenceRepository } from '../interfaces/occurrence.interface';
import { OccurrenceEntity } from '../entities/occurrence.entity';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class OccurrenceRepository extends IOccurrenceRepository {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async create(data: CreateOccurrenceDto): Promise<void> {
    await this.prismaService.$transaction(async (prisma) => {
      const polygonsData = data.polygons;
      delete data.polygons;

      const occurrence = await prisma.occurrence.create({
        data: {
          cameraId: data.cameraId,
          timestamp: data.timestamp,
          frame: data.frame,
        },
      });

      await Promise.all(
        polygonsData.map((polygon) =>
          prisma.polygon.create({
            data: {
              class: polygon.class,
              x1: polygon.x1,
              x2: polygon.x2,
              y1: polygon.y1,
              y2: polygon.y2,
              conf: polygon.conf,
              occurrenceId: occurrence.id,
            },
          }),
        ),
      );
    });
  }

  async findAll(): Promise<OccurrenceEntity[]> {
    const occurrences = await this.prismaService.occurrence.findMany({
      include: {
        polygons: true,
      },
    });
    return occurrences;
  }

  async findOne(id: string): Promise<OccurrenceEntity | null> {
    const occurrence = await this.prismaService.occurrence.findUnique({
      where: {
        id: id,
      },
      include: {
        polygons: true,
      },
    });

    if (!occurrence) {
      throw new Error('Occurrence not found');
    }

    return occurrence;
  }
}
