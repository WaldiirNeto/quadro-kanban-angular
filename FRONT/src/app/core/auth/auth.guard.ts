import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { GlobalEnums } from '@shared/enums/global-enums.enum'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = localStorage.getItem(GlobalEnums.TOKEN_KANBAN)
    if (token) {
      return true
    } else {
      this._router.navigate(['login'])
      return false
    }

  }
}
