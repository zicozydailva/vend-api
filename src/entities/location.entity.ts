import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseTable } from '../base';
import { ILocation } from 'src/interfaces/location.interface';
import { Character } from './character.entity';

@Entity('location')
export class Location extends BaseTable implements ILocation {
  constructor(partial: Partial<Location>) {
    super();
    Object.assign(this, partial);
  }

  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  latitude: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  longitude: string;

  @ManyToOne(() => Character, (character) => character.id)
  character: Character;
}
