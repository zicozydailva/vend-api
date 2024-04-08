import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from 'src/entities/character.entity';
import { ErrorHelper } from 'src/helpers/error.utils';
import { Repository } from 'typeorm';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character) private characterRepo: Repository<Character>,
  ) {}

  private characterNotFound = 'Character Not found';

  async createCharacter(payload: any) {
    await this.characterRepo.save(payload);
  }

  async getAllCharacters() {
    await this.characterRepo.find({});
  }

  async getACharacter(characterId: number) {
    await this.characterRepo.findOne({ where: { id: characterId } });
  }

  async updateACharacter(characterId: number, payload) {
    const character = await this.characterRepo.findOne({
      where: { id: characterId },
    });

    if (!character) {
      ErrorHelper.NotFoundException(this.characterNotFound);
    }
    await this.characterRepo.update(character.id, { ...payload });

    return true;
  }

  async deleteACharacter(id: number) {
    const character = await this.characterRepo.findOne({ where: { id } });

    if (!character) {
      ErrorHelper.NotFoundException(this.characterNotFound);
    }
    await this.characterRepo.delete(character.id);

    return true;
  }
}
