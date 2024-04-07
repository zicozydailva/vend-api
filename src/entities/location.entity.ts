import { Column, Entity, Index } from 'typeorm';

import { BaseTable } from '../base';
import { ILocation } from 'src/interfaces/location.interface';

@Entity('location')
export class Location extends BaseTable implements ILocation {
  constructor(partial: Partial<Location>) {
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
  latitude: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: true,
  })
  @Index()
  longitude: string;
}
