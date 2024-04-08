import { IsString, IsOptional, IsEnum } from 'class-validator';

export enum GenderType {
  male = 'male',
  female = 'female',
}

enum StatusEnum {
  ACTIVE = 'ACTIVE',
  DEAD = 'DEAD',
  UNKNOWN = 'UNKNOWN',
}

export class CreateCharacterDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEnum(StatusEnum)
  status: StatusEnum;

  @IsString()
  @IsOptional()
  state_of_origin: string;

  @IsEnum(StatusEnum)
  gender: StatusEnum;
}
