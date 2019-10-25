import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsGuard implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id: string = next.url[1].path;
    let regx: RegExp = /^tt[0-9]{7}$/;
    let check: Boolean = regx.test(id);
    if(check === false){

      alert('Invalid id');
      this.router.navigate(['/home']);
      return false;
    }
   
      return true;
  }

}
