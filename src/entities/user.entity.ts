import { Column, Entity, Index } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseTable } from '../base';
import { UserStatus } from 'src/enums/user.enum';
import { IUser } from 'src/interfaces/user.interface';

@Entity('user')
export class User extends BaseTable implements IUser {
  constructor(partial: Partial<User>) {
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
    type: 'varchar',
    length: 60,
    unique: true,
    nullable: true,
  })
  @Index()
  location: string;

  @Column({
    type: 'varchar',
    length: 60,
    unique: true,
    nullable: true,
  })
  @Index()
  email: string;

  @Exclude()
  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  password: string;

  @Column({
    type: 'bool',
    default: false,
    nullable: true,
  })
  email_confirm?: boolean;

  @Column({
    name: 'status',
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;
}
