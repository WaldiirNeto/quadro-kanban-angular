import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { finalize, Subject, takeUntil } from 'rxjs'
import { ModalCreateTaskComponent } from './components/modal-create-task/modal-create-task.component'
import { CardModel } from './models/card.model'
import { KanbanService } from './services/kanban.service'

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit, OnDestroy {

  protected loading: boolean
  private _destroyObservable = new Subject();

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _kanbanService: KanbanService
  ) { }

  ngOnInit(): void {
    this._kanbanService.listCards()
      .pipe(
        takeUntil(this._destroyObservable),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (listCards: Array<CardModel>) => {
          console.log(listCards)
        },
        error: (_) => {

        }
      })

  }

  public openDialog(): void {
    this._dialog.open(ModalCreateTaskComponent, {
      width: `500px`,
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `1000ms`,
      backdropClass: 'backdropBackground'
    })
  }

  ngOnDestroy(): void {
    this._destroyObservable.next(null)
    this._destroyObservable.complete()
  }

}
