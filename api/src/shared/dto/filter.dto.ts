import { IsNumber, IsString, Max, Min } from 'class-validator';

export class FilterDto {
  @IsString()
  search = '';
  @IsNumber()
  @Min(0)
  @Max(65535)
  offset = 0;
  @IsNumber()
  @Min(0)
  @Max(100)
  limit = 10;
}
