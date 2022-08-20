import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { Observable } from 'rxjs'
import { CardCreateModel, CardModel } from '../models/card.model'

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  constructor(private readonly _http: HttpPrivateClientService) { }

  listCards(): Observable<Array<CardModel>> {
    return this._http.get(API_URL.CARDS)
  }

  createTask(payload: CardCreateModel): Observable<void> {
    return this._http.post(API_URL.CARDS, payload)
  }
}
