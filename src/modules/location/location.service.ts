import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from 'src/entities/location.entity';
import { ErrorHelper } from 'src/helpers/error.utils';
import { Repository } from 'typeorm';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location) private locationRepo: Repository<Location>,
  ) {}

  private locationNotFound = 'Location Not found';

  async createLocation(payload: any) {
    await this.locationRepo.save(payload);
  }

  async getAllLocations() {
    await this.locationRepo.find({});
  }

  async getALocation(characterId: number) {
    await this.locationRepo.findOne({ where: { id: characterId } });
  }

  async updateALocation(characterId: number, payload) {
    const character = await this.locationRepo.findOne({
      where: { id: characterId },
    });

    if (!character) {
      ErrorHelper.NotFoundException(this.locationNotFound);
    }
    await this.locationRepo.update(character.id, { ...payload });

    return true;
  }

  async deleteALocation(id: number) {
    const character = await this.locationRepo.findOne({ where: { id } });

    if (!character) {
      ErrorHelper.NotFoundException(this.locationNotFound);
    }
    await this.locationRepo.delete(character.id);

    return true;
  }
}
