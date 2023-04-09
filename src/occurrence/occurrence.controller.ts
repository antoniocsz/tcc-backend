import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateOccurrenceDto } from './dto/create-occurrence.dto';
import { OccurrenceInMemoryRepository } from './repositories/occurrenceInMemory.repository';

@Controller('occurrence')
export class OccurrenceController {
  constructor(
    private readonly occurrenceRepository: OccurrenceInMemoryRepository,
  ) {}

  @Post()
  create(@Body() createOccurrenceDto: CreateOccurrenceDto) {
    return this.occurrenceRepository.create(createOccurrenceDto);
  }

  @Get()
  findAll() {
    return this.occurrenceRepository.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.occurrenceRepository.findOne(id);
  }
}
