import { Component } from '@angular/core';
import { slideInAnimation } from './app.animation';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
  <span class="fa fa-spinner spinner"
      *ngIf="loading"></span>
  <app-hd></app-hd>
  <main>
    <router-outlet></router-outlet>
  </main>
  `,
  animations: [slideInAnimation],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Mini-Netflix';
  loading: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }
}
