import { Injectable } from '@angular/core'
import { GlobalEnums } from '@shared/enums/global-enums.enum'
import { UserModel } from '@shared/models/user.model'
import jwt_decode from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _token = localStorage.getItem(GlobalEnums.TOKEN_KANBAN) as string

  get token(): UserModel {
    return jwt_decode(this._token)
  }

  public logout(): void {
    localStorage.removeItem(GlobalEnums.TOKEN_KANBAN)
  }
}
