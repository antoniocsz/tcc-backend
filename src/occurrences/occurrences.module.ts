import { Module } from '@nestjs/common';
import { OccurrencesService } from './occurrences.service';
import { OccurrencesController } from './occurrences.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [OccurrencesController],
  providers: [OccurrencesService, PrismaService],
})
export class OccurrencesModule {}
