import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseTable } from '../base';
import { UserStatus } from 'src/enums/user.enum';
import { Icharacter } from 'src/interfaces/character.interface';
import { Location } from './location.entity';
import { Episode } from './episode.entity';

@Entity('character')
export class Character extends BaseTable implements Icharacter {
  constructor(partial: Partial<Character>) {
    super();
    Object.assign(this, partial);
  }

  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  @Index()
  first_name: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  @Index()
  last_name: string;

  @Column({
    name: 'status',
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
    nullable: false,
  })
  status: UserStatus;

  @Exclude()
  @Column({
    type: 'varchar',
    length: 60,
  })
  state_of_origin: string;

  @OneToMany(() => Location, (characterLocation) => characterLocation.id, {
    cascade: true,
  })
  location: Location;

  @OneToMany(() => Episode, (characterEpisode) => characterEpisode.id, {
    cascade: true,
  })
  episode: Episode;

  @Column({
    type: 'string',
    nullable: false,
  })
  gender: 'MALE' | 'FEMALE';
}
