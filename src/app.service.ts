import { Inject, Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { ProgramNotFoundException } from './exceptions/program-not-found.exception';
import { Program } from './types';
import { resolveDate } from './utils';

@Injectable()
export class AppService {
  private programs: Program[] = [];
  private nextId = 1;

  allPrograms() {
    return this.programs;
  }
  getProgram(id: number) {
    return this.programs.find((p) => p.Id === id);
  }
  createProgram(program: CreateProgramDto) {
    const Id = this.nextId++;

    this.programs.push({
      ...program,
      Data: resolveDate(program.Data),
      Id,
    });

    return this.getProgram(Id);
  }
  updateProgram(id: number, payload: UpdateProgramDto) {
    const index = this.findIndex(id);
    if (index === -1) throw new ProgramNotFoundException();

    const program = this.programs[index];

    this.programs[index] = {
      ...program,
      ...payload,
      Data: resolveDate(payload.Data, program.Data),
    };

    return this.programs[index];
  }
  deleteProgram(id: number) {
    const index = this.findIndex(id);
    if (index === -1) throw new ProgramNotFoundException();
    return this.programs.splice(index, 1);
  }
  private findIndex(id: number) {
    return this.programs.findIndex((p) => p.Id === id);
  }
}
