import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OccurrenceService } from './occurrence.service';
import { CreateOccurrenceDto } from './dto/create-occurrence.dto';

@Controller('occurrence')
export class OccurrenceController {
  constructor(private readonly occurrenceService: OccurrenceService) {}

  @Post()
  create(@Body() createOccurrenceDto: CreateOccurrenceDto) {
    return this.occurrenceService.create(createOccurrenceDto);
  }

  @Get()
  findAll() {
    return this.occurrenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.occurrenceService.findOne(+id);
  }
}
