import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OccurrencesService } from './occurrences.service';
import { CreateOccurrenceDto } from './dto/create-occurrence.dto';

@Controller('occurrences')
export class OccurrencesController {
  constructor(private readonly occurrencesService: OccurrencesService) {}

  @Post()
  create(@Body() createOccurrenceDto: CreateOccurrenceDto) {
    return this.occurrencesService.create(createOccurrenceDto);
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
