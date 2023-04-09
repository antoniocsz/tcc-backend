import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OccurrenceController } from './occurrence.controller';
import { OccurrenceRepository } from './repositories/occurrence.repository';

@Module({
  controllers: [OccurrenceController],
  providers: [OccurrenceRepository, PrismaService],
})
export class OccurrenceModule {}
