import { Component, OnInit } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router'
import { TokenService } from '@core/token/token.service'
import { UserModel } from '@shared/models/user.model'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [MatIconModule],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private readonly _tokenService: TokenService, private readonly _router: Router) { }

  get token(): UserModel {
    return this._tokenService.token as UserModel
  }

  logout(): void {
    this._tokenService.logout()
    this._router.navigate(['login'])

  }
}
