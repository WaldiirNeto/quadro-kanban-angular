import { Injectable } from '@angular/core'
import { HttpPublicClientService } from '@core/http/http-public-client.service'
import API_URL from '@helpers/api-router.helper'
import { filter, Observable } from 'rxjs'
import { LoginModel } from '../models'

@Injectable()
export class LoginService {

  constructor(private readonly _http: HttpPublicClientService) { }

  login(loginPayload: LoginModel): Observable<string> {
    return this._http.post(API_URL.LOGIN, loginPayload)
  }
}
