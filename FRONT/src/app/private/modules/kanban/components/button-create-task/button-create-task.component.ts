import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { filter, Subject, takeUntil } from 'rxjs'
import { ModalCreateTaskComponent } from '../modal-create-task/modal-create-task.component'

@Component({
  selector: 'app-button-create-task',
  templateUrl: './button-create-task.component.html',
  styleUrls: ['./button-create-task.component.scss']
})
export class ButtonCreateTaskComponent {
  @Output() emitToList: EventEmitter<void> = new EventEmitter()
  private _destroyObservable = new Subject()
  constructor(private readonly _dialog: MatDialog) { }

  public openDialog(): void {
    this._dialog.open(ModalCreateTaskComponent, {
      width: `80%`,
      enterAnimationDuration: `500ms`,
      exitAnimationDuration: `500ms`,
      backdropClass: 'backdropBackground'
    }).afterClosed()
      .pipe(takeUntil(this._destroyObservable),
        filter((resultModal: boolean) => resultModal)
      )
      .subscribe((_) => {
        this.emitToList.emit()
      })
  }
}
