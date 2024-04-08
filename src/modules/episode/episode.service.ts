import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Episode } from 'src/entities/episode.entity';
import { ErrorHelper } from 'src/helpers/error.utils';
import { Repository } from 'typeorm';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectRepository(Episode) private episodeRepo: Repository<Episode>,
  ) {}

  private episodeNotFound = 'Episode Not found';

  async createEpisode(data: any) {
    try {
      return this.episodeRepo.create(data);
    } catch (error) {
      ErrorHelper.BadRequestException(error.message);
    }
  }

  async findAllEpisodes(filterOptions?: any) {
    if (filterOptions) {
      return this.episodeRepo.find(filterOptions);
    }
    return this.episodeRepo.find({});
  }

  async findOneEpisode(id: number) {
    return this.episodeRepo.findOne({ where: { id } });
  }

  async updateEpisode(id: number, data) {
    const episode = await this.episodeRepo.findOne({ where: { id } });

    if (!episode) {
      ErrorHelper.NotFoundException(this.episodeNotFound);
    }
    await this.episodeRepo.update(episode.id, { ...data });

    return true;
  }

  async deleteEpisode(id: number) {
    const episode = await this.episodeRepo.findOne({ where: { id } });

    await this.episodeRepo.delete(episode.id);

    return true;
  }
}
