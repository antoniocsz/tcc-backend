import { Get, Post, Controller, Body, Param } from '@nestjs/common';
import { CreateOccurrenceDto } from './dto/create-occurrence.dto';
import { OccurrenceRepository } from './repositories/occurrence.repository';

@Controller('occurrence')
export class OccurrenceController {
  constructor(private readonly occurrenceRepository: OccurrenceRepository) {}

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
