import { Column, Entity, Index } from 'typeorm';

import { BaseTable } from '../base';
import { IComment } from 'src/interfaces/comment.interface';

@Entity('comment')
export class Comment extends BaseTable implements IComment {
  constructor(partial: Partial<Comment>) {
    super();
    Object.assign(this, partial);
  }

  @Column({
    type: 'varchar',
    length: 250,
    nullable: false,
  })
  @Index()
  comment: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  @Index()
  ip_address_location: string;
}
