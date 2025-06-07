import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar bg-primary">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="navbar-item">
            <a class="navbar-brand text-bg-primary" [routerLink]="['/']" [routerLinkActive]="['active']">My football teams</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
