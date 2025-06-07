import { Component } from '@angular/core';
import { TeamFormComponent } from '../team-form/team-form.component';
import { TeamListComponent } from '../team-list/team-list.component';

@Component({
  selector: 'app-team',
  imports: [TeamFormComponent, TeamListComponent],
  templateUrl: './team.component.html'
})
export class TeamComponent {

}
