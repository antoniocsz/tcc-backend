import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OccurrencesService } from './occurrences.service';
import { OccurrenceDto } from './dto/occurrence.dto';

@Controller('occurrences')
export class OccurrencesController {
  constructor(private readonly occurrencesService: OccurrencesService) {}

  @Post()
  async create(@Body() data: OccurrenceDto) {
    return this.occurrencesService.create(data);
  }

  @Get()
  findAll() {
    return this.occurrencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.occurrencesService.findOne(+id);
  }
}
