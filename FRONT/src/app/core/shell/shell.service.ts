import { Route, Routes } from '@angular/router'
import { AuthGuard } from '@core/auth/auth.guard'
import { PrivateComponent } from 'src/app/private/private.component'


export class Shell {

  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: PrivateComponent,
      children: routes,
      canActivate: [AuthGuard],
      data: { reuse: true }
    }
  }
}
