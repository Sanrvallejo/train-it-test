import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/team.model';
import { TeamService } from '../../services/team.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-list',
  imports: [CommonModule],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit{

  ngOnInit(): void {
    this.getTeams();
  }

  teams: Team[] =[];

  constructor(private teamService: TeamService) {}

  getTeams() {
    this.teamService.getTeams()
      .subscribe(
        res => {
          this.teams = res;
        },
        err => console.log(err)
      )
  }

  deleteTeam(id: any) {
    this.teamService.deleteTeam(id)
      .subscribe(
        res => {
          console.log(res)
          window.location.href = '/';
        },
        err => console.log(err)        
      )
  }

}
