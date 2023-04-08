import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OccurrenceService } from './occurrence.service';
import { OccurrenceController } from './occurrence.controller';

@Module({
  controllers: [OccurrenceController],
  providers: [OccurrenceService, PrismaService],
})
export class OccurrenceModule {}
