import { IsArray, IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateProgramDto {
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
  @IsString()
  Envolvidos: string;

  @IsDefined()
  @IsString()
  Procedimento: string;
}
