import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <h1>Hello world!</h1> `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Homes';
}
