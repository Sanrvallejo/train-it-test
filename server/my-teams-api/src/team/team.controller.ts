import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { Teams } from 'generated/prisma';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get('/')
  async getAll() {
    return this.teamService.getAllTeams();
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.teamService.getTeamById(Number(id));
  }

  @Post()
  async create(@Body() data: Teams) {
    return this.teamService.createTeam(data);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: Teams) {
    return this.teamService.updateTeam(Number(id), data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.teamService.deleteTeam(Number(id));
  }
}
