import { Routes } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';

export const routes: Routes = [
    {
        path: '',
        component: TeamComponent
    },
    {
        path: 'edit',
        component: EditTeamComponent
    }
];

