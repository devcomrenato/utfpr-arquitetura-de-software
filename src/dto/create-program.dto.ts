import { IsArray, IsDefined, IsNumber, IsString } from 'class-validator';

export class CreateProgramDto {
  @IsDefined()
  @IsString()
  NomePrograma: string;
  @IsDefined()
  @IsString()
  Data: string;
  @IsDefined()
  @IsNumber()
  Gestor: number;
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
