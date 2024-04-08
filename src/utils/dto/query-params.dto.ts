import { IsOptional, IsString } from 'class-validator';

import { PaginationDto } from './page-options.dto';

export class FetchDto extends PaginationDto {
  @IsString()
  @IsOptional()
  search?: string;
}
