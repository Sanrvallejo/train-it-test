import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/team.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-list',
  imports: [],
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
        res => console.log(res),
        err => console.log(err)
      )
  }

}
