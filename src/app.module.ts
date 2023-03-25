import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OccurrencesModule } from './occurrences/occurrences.module';

@Module({
  imports: [OccurrencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
