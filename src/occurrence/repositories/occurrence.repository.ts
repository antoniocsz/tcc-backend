import { Injectable } from '@nestjs/common';
import { CreateOccurrenceDto } from '../dto/create-occurrence.dto';
import { IOccurrenceRepository } from '../interfaces/occurrence.interface';
import { OccurrenceEntity } from '../entities/occurrence.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OccurrenceRepository extends IOccurrenceRepository {
  private prismaService: PrismaService;

  async create(data: CreateOccurrenceDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<OccurrenceEntity[]> {
    throw new Error('Method not implemented.');
  }
  async findOne(id: string): Promise<OccurrenceEntity> {
    throw new Error('Method not implemented.');
  }
}
