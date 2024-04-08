import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { CharacterModule } from './modules/character/character.module';
import { LocationModule } from './modules/location/location.module';
import { EpisodeModule } from './modules/episode/episode.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CharacterModule,
    LocationModule,
    EpisodeModule,
  ],
  providers: [],
})
export class AppModule {}
