import { Component, OnDestroy, OnInit } from '@angular/core'
import { finalize, Subject, takeUntil } from 'rxjs'
import { CardModel, listCarPerType } from './models/card.model'
import { KanbanService } from './services/kanban.service'

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit, OnDestroy {

  protected loading: boolean
  private _destroyObservable = new Subject();
  protected listCard: listCarPerType

  constructor(private readonly _kanbanService: KanbanService) { }

  ngOnInit(): void {
    this.loading = true
    this._kanbanService.listCards()
      .pipe(
        takeUntil(this._destroyObservable),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (listCards: Array<CardModel>) => {
          this.listCard = listCards.reduce((acumulador, valorAtual) => {
            acumulador[valorAtual.lista] = acumulador[valorAtual.lista] || []
            acumulador[valorAtual.lista].push(valorAtual)
            return acumulador
          }, Object.create(null))
        },
        error: (_) => {

        }
      })

  }

  ngOnDestroy(): void {
    this._destroyObservable.next(null)
    this._destroyObservable.complete()
  }

}
