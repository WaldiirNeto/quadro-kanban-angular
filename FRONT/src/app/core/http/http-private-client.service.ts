import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { GlobalEnums } from '@shared/enums/global-enums.enum'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpPrivateClientService {
  constructor(private readonly _http: HttpClient) {
  }

  public get<T>(url: string): Observable<T> {
    const token = localStorage.getItem(GlobalEnums.TOKEN_KANBAN)
    return this._http.get<T>(url, { headers: { 'Authorization': `Bearer ${token}` } })
  }

  public post<T>(url: string, payload: {}): Observable<T> {
    const token = localStorage.getItem(GlobalEnums.TOKEN_KANBAN)
    return this._http.post<T>(url, payload, { headers: { 'Authorization': `Bearer ${token}` } })
  }

  public put<T>(url: string, payload: {}): Observable<T> {
    const token = localStorage.getItem(GlobalEnums.TOKEN_KANBAN)
    return this._http.put<T>(url, { headers: { 'Authorization': `Bearer ${token}` } })
  }


}
