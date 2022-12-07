import { IsArray, IsDefined, IsOptional, IsString } from 'class-validator';

export class UpdateProgramDto {
  @IsDefined()
  @IsString()
  NomePrograma: string;

  @IsOptional()
  @IsString()
  Data?: string;

  @IsDefined()
  @IsString()
  Gestor: string;

  @IsDefined()
  @IsString()
  Objetivo: string;

  @IsDefined()
  @IsString()
  Justificativa: string;

  @IsDefined()
  @IsArray()
  Envolvidos: string[];

  @IsDefined()
  @IsString()
  Procedimento: string;
}
