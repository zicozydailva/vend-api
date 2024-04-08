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
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/character.dto';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('')
  async createCharacter(@Body() payload: CreateCharacterDto) {
    const res = await this.characterService.createCharacter(payload);

    return {
      data: res,
      message: 'Character Created Successfully',
      status: HttpStatus.CREATED,
    };
  }

  @Get()
  async findAll() {
    const res = await this.characterService.getAllCharacters();

    return {
      data: res,
      message: 'Character Fetched Successfully',
      status: HttpStatus.CREATED,
    };
  }

  @Get(':id')
  async getACharacter(@Param('id') id: number) {
    const res = await this.characterService.getACharacter(id);

    return {
      data: res,
      message: 'Character Fetched Successfully',
      status: HttpStatus.CREATED,
    };
  }

  @Patch(':id')
  async updateACharacter(@Param('id') id: number, @Body() payload) {
    const res = await this.characterService.updateACharacter(id, payload);

    return {
      data: res,
      message: 'Character Fetched Successfully',
      status: HttpStatus.CREATED,
    };
  }

  @Delete(':id')
  async deleteACharacter(@Param('id') id: number) {
    const res = await this.characterService.deleteACharacter(id);

    return {
      data: res,
      message: 'Character Fetched Successfully',
      status: HttpStatus.CREATED,
    };
  }
}
