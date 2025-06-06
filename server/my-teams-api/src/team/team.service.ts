import { Injectable } from '@nestjs/common';
import { Teams } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllTeams(): Promise<Teams[]> {
    return this.prismaService.teams.findMany();
  }

  async getTeamById(id: number): Promise<Teams> {
    return this.prismaService.teams.findUniqueOrThrow({
      where: { id },
    });
  }

  async createTeam(data: Teams): Promise<Teams> {
    return this.prismaService.teams.create({ data });
  }

  async updateTeam(id: number, data: Teams): Promise<Teams> {
    return this.prismaService.teams.update({
      where: { id },
      data,
    });
  }

  async deleteTeam(id: number): Promise<Teams> {
    return this.prismaService.teams.delete({
      where: { id },
    });
  }
}
