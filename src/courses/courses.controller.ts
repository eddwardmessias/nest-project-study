import { CoursesService } from './courses.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  findAll() {
    // return response.status(200).send('Listagem de cursos');
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(id);
    const teste = this.courseService.findOne(+id);
    console.log(teste);

    return teste;
  }

  //   //mais de um paramtero - course/1/edd
  //   @Get(':id/:name')
  //   findOne(@Param('id') id: string, @Param('name') name: string) {
  //     return `Curso com ID ${id} - ${name}`;
  //   }

  @Post()
  create(@Body() body) {
    return this.courseService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.courseService.update(+id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.courseService.remove(+id);
  }
}
