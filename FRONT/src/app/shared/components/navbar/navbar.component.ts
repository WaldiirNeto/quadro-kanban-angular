import { Component, OnInit } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { TokenService } from '@core/token/token.service'
import { UserModel } from '@shared/models/user.model'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [MatIconModule],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly _tokenService: TokenService) { }

  ngOnInit(): void {
  }

  get token(): UserModel {
    return this._tokenService.token as UserModel
  }
}
