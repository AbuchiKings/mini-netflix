import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-hd></app-hd>
  <main>
    <router-outlet></router-outlet>
  </main>
  `
})
export class AppComponent {
  title = 'Mini-Netflix';

}
