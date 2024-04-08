import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { CharacterModule } from './modules/character/character.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  providers: [CharacterModule],
})
export class AppModule {}
