import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { OccurrenceModule } from './occurrence/occurrence.module';

@Module({
  imports: [OccurrenceModule, PrismaModule],
})
export class AppModule {}
