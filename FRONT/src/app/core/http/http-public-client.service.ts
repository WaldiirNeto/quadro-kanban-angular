import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class HttpPublicClientService {
  constructor(private readonly _http: HttpClient) { }

  post<T, R>(url: string, payload: T): Observable<R> {
    return this._http.post<R>(url, payload)
  }
}
