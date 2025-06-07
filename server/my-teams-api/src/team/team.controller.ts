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
    try {
      return await this.teamService.getTeamById(Number(id));
    } catch (error) {
      throw new NotFoundException(`Team with id: ${id} not found`);
    }
  }

  @Post()
  async create(@Body() data: Teams) {
    return this.teamService.createTeam(data);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: Teams) {
    try {
      return await this.teamService.updateTeam(Number(id), data);
    } catch (error) {
      throw new NotFoundException(`Team with id: ${id} not found`);
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    try {
      return await this.teamService.deleteTeam(Number(id));
    } catch (error) {
      throw new NotFoundException(`Team with id: ${id} not found`);
    }
  }
}
