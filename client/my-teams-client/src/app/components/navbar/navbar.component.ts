import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar bg-primary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 text-bg-primary">My favorite Teams</span>
      </div>
    </nav>
  `
})
export class NavbarComponent {

}
