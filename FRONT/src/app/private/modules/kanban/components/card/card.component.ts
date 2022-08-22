import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { filter, Subject, takeUntil } from 'rxjs'
import { CardModel, listCarPerType } from '../../models/card.model'
import { ModalCreateTaskComponent } from '../modal-create-task/modal-create-task.component'
import { ModalDeleteCardComponent } from '../modal-delete-card/modal-delete-card.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Output() emitToList: EventEmitter<void> = new EventEmitter()
  @Input() listCard: listCarPerType

  public listToDo: Array<CardModel> = []
  public listDoing: Array<CardModel> = []
  public listDone: Array<CardModel> = []

  private _destroyObservable$ = new Subject()

  constructor(private readonly _dialog: MatDialog) { }

  ngOnInit(): void {
    this.listToDo = this.listCard['ToDo']
    this.listDoing = (this.listCard['Doing']?.length ? this.listCard['Doing'] : [])
    this.listDone = (this.listCard['Done']?.length ? this.listCard['Done'] : [])
  }


  public moveCard(event: CdkDragDrop<Array<CardModel>>, type: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    }
  }

  public openModalDeleteCard(id: string): void {
    this._dialog.open(ModalDeleteCardComponent, {
      data: { id },
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

  ngOnDestroy(): void {
    this._destroyObservable$.next(null)
    this._destroyObservable$.complete()
  }
}
