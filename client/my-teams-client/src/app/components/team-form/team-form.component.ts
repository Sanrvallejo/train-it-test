import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Team } from '../../model/team.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-form',
  imports: [FormsModule],
  templateUrl: './team-form.component.html',
  styleUrl: './team-form.component.css'
})
export class TeamFormComponent {

  team: Team = {
    name: '',
    local_titles: 0,
    world_titles: 0
  } 

  constructor(private readonly teamService: TeamService) {}

  saveTeam() {
    this.teamService.createTeam(this.team)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
        
      )
    
  }

}
