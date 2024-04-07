import { Column, Entity, Index } from 'typeorm';

import { BaseTable } from '../base';
import { IEpisode } from 'src/interfaces/episode.interface';

@Entity('episode')
export class Episode extends BaseTable implements IEpisode {
  constructor(partial: Partial<Episode>) {
    super();
    Object.assign(this, partial);
  }

  @Column({
    type: 'varchar',
    length: 60,
    nullable: true,
  })
  @Index()
  name: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: true,
  })
  @Index()
  release_date: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: true,
  })
  @Index()
  episode_code: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: true,
  })
  @Index()
  characters: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: true,
  })
  @Index()
  episode_comment: string;
}
