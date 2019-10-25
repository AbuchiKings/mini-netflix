import { Component } from '@angular/core';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  template: `
  <app-hd></app-hd>
  <main>
    <router-outlet></router-outlet>
  </main>
  `,
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'Mini-Netflix';

}
