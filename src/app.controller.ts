import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { ProgramNotFoundException } from './exceptions/program-not-found.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('programs')
  getAllPrograms() {
    return this.appService.allPrograms();
  }

  @Post('programs')
  postProgram(@Body() payload: CreateProgramDto) {
    return this.appService.createProgram(payload);
  }

  @Get('programs/:id')
  getProgram(@Param('id') id: string) {
    const _id = Number.parseInt(id);
    if (Number.isNaN(_id)) throw new BadRequestException();

    const program = this.appService.getProgram(_id);
    if (!program) throw new NotFoundException();

    return program;
  }

  @Put('programs/:id')
  putProgram(@Param('id') id: string, @Body() payload: UpdateProgramDto) {
    const _id = Number.parseInt(id);
    if (Number.isNaN(_id)) throw new BadRequestException();

    try {
      return this.appService.updateProgram(_id, payload);
    } catch (err) {
      if (err instanceof ProgramNotFoundException)
        throw new NotFoundException();

      throw err;
    }
  }

  @Delete('programs/:id')
  deleteProgram(@Param('id') id: string) {
    const _id = Number.parseInt(id);
    if (Number.isNaN(_id)) throw new BadRequestException();

    try {
      return this.appService.deleteProgram(_id)[0] ?? null;
    } catch (err) {
      if (err instanceof ProgramNotFoundException)
        throw new NotFoundException();

      throw err;
    }
  }
}
