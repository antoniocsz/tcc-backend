import { Injectable } from '@nestjs/common';
import { CreateOccurrenceDto } from './dto/create-occurrence.dto';

@Injectable()
export class OccurrenceService {
  create(createOccurrenceDto: CreateOccurrenceDto) {
    return 'This action adds a new occurrence';
  }

  findAll() {
    return `This action returns all occurrence`;
  }

  findOne(id: number) {
    return `This action returns a #${id} occurrence`;
  }
}
