import { Injectable } from '@angular/core'
import jwt_decode from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _token = localStorage.getItem('token') as string
  getUserLocal() {
    console.log(jwt_decode(this._token))
  }
}
