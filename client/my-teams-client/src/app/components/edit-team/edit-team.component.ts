import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/team.model';
import { FormsModule } from '@angular/forms';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  imports: [FormsModule],
  templateUrl: './edit-team.component.html'
})
export class EditTeamComponent implements OnInit {

  team: Team = {
    id: 0,
    name: '',
    local_titles: 0,
    world_titles: 0
  }

  ngOnInit(): void {
    const params = this.actRoute.snapshot.params;
    if (params) {
      this.teamService.getTeamById(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.team = res;
          },
          err => console.log(err)
          
        )
    }
    
  }

  constructor(
    private readonly teamService: TeamService,
    private readonly actRoute: ActivatedRoute
  ) {}

  editTeam() {
    this.teamService.editTeam(this.team.id, this.team)
      .subscribe(
        res => {
          console.log(res);
          window.location.href = '/'
        },
        err => console.log(err)
        
      )
    
  }

}
