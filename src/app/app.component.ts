import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-hd></app-hd>
  <main>
    <mv></mv>
  </main>
  `
})
export class AppComponent {
  title = 'Mini-Netflix';
}
