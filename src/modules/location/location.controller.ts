import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCharacterDto } from '../character/dto/character.dto';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationservice: LocationService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('')
  async createCharacter(@Body() payload: CreateCharacterDto) {
    const res = await this.locationservice.createLocation(payload);

    return {
      data: res,
      message: 'Location Created Successfully',
      status: HttpStatus.CREATED,
    };
  }

  @Get()
  async getAllLocations() {
    const res = await this.locationservice.getAllLocations();

    return {
      data: res,
      message: 'Location Fetched Successfully',
      status: HttpStatus.CREATED,
    };
  }

  @Get(':id')
  async getALocation(@Param('id') id: number) {
    const res = await this.locationservice.getALocation(id);

    return {
      data: res,
      message: 'Location Fetched Successfully',
      status: HttpStatus.CREATED,
    };
  }

  @Patch(':id')
  async updateALocation(@Param('id') id: number, @Body() payload) {
    const res = await this.locationservice.updateALocation(id, payload);

    return {
      data: res,
      message: 'Location Fetched Successfully',
      status: HttpStatus.CREATED,
    };
  }

  @Delete(':id')
  async deleteALocation(@Param('id') id: number) {
    const res = await this.locationservice.deleteALocation(id);

    return {
      data: res,
      message: 'Location Fetched Successfully',
      status: HttpStatus.CREATED,
    };
  }
}
