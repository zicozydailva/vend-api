import { Column, Entity, Index, ManyToOne } from 'typeorm';

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
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  release_date: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  episode_code: string;

  @Column({
    type: 'varchar',
  })
  characters: string;

  @Column({
    type: 'varchar',
  })
  episode_comment: string;

  @ManyToOne(() => Episode, (episode) => episode.id)
  episode: Episode;
}
