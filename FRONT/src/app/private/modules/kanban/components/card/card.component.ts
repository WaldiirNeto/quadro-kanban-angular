import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { filter, Subject, takeUntil } from 'rxjs'
import { CardModel } from '../../models/card.model'
import { ModalCreateTaskComponent } from '../modal-create-task/modal-create-task.component'
import { ModalDeleteCardComponent } from '../modal-delete-card/modal-delete-card.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() listCard: CardModel[]
  @Output() emitToList: EventEmitter<void> = new EventEmitter()

  private _destroyObservable$ = new Subject()

  constructor(private readonly _dialog: MatDialog) { }

  public openModalDeleteCard(id: string): void {
    this._dialog.open(ModalDeleteCardComponent, {
      data: { id },
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `1000ms`,
      backdropClass: `backdropBackground`,
      height: `200px`
    })
  }
  public openModalEditCard(task: CardModel): void {
    this._dialog.open(ModalCreateTaskComponent, {
      width: `80%`,
      minHeight: `53%`,
      data: { task },
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `1000ms`,
      backdropClass: `backdropBackground`,
      height: `200px`
    }).afterClosed()
      .pipe(takeUntil(this._destroyObservable$),
        filter((resultModal: boolean) => resultModal)
      )
      .subscribe((_) => {
        this.emitToList.emit()
      })
  }
}
