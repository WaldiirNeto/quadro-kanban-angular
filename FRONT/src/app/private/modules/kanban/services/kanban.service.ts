import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { Observable } from 'rxjs'
import { CardModel } from '../models/card.model'

@Injectable()
export class KanbanService {

  constructor(private readonly _http: HttpPrivateClientService) { }

  public listCards(): Observable<Array<CardModel>> {
    return this._http.get(API_URL.CARDS)
  }

  public createTask(payload: CardModel): Observable<void> {
    return this._http.post(API_URL.CARDS, payload)
  }

  public editTask(payload: CardModel): Observable<void> {
    return this._http.put(API_URL.CARD(payload.id), payload)
  }

  public deleteTask(id: string): Observable<void> {
    return this._http.delete(API_URL.CARD(id))
  }
}
