import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OccurrenceDto } from './dto/occurrence.dto';

@Injectable()
export class OccurrencesService {
  constructor(private prisma: PrismaService) {}

  async create(data: OccurrenceDto) {
    return `This action returns new occurrence`;
  }

  findAll() {
    return `This action returns all occurrences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} occurrence`;
  }
}
