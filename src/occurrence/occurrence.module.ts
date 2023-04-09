import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OccurrenceController } from './occurrence.controller';
import { OccurrenceInMemoryRepository } from './repositories/occurrenceInMemory.repository';

@Module({
  controllers: [OccurrenceController],
  providers: [OccurrenceInMemoryRepository, PrismaService],
})
export class OccurrenceModule {}
