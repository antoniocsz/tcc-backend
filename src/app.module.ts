import { Module } from '@nestjs/common';
import { OccurrencesModule } from './occurrences/occurrences.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [OccurrencesModule, PrismaModule],
})
export class AppModule {}
