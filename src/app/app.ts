import { Component} from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Home, RouterOutlet, RouterLink],
  //imports: [RouterOutlet],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <!-- <img class="brand-logo" src="/public/logo.svg" alt="logo" aria-hidden="true" /> -->
          <img class="brand-logo" src="logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet />
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})

export class App {
  title = 'Homes';
}
