import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { TeamService } from "./team.service";
import { TeamController } from "./team.controller";

@Module({
    imports: [PrismaModule],
    providers: [TeamService],
    controllers: [TeamController]
})
export class TeamModule {

}