import { IsString } from 'class-validator';

export class FilterDto {
  @IsString()
  search = '';
  @IsString()
  offset = 0;
  @IsString()
  limit = 10;
  @IsString()
  orderBy = '-updatedAt';
}
