import { Component, Inject, OnDestroy } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { GlobalEnums } from '@shared/enums/global-enums.enum'
import { SnackBarService } from '@shared/services/snackbar.service'
import { finalize, Subject, takeUntil } from 'rxjs'
import { KanbanService } from '../../services/kanban.service'

@Component({
  selector: 'app-modal-delete-card',
  templateUrl: './modal-delete-card.component.html',
  styleUrls: ['./modal-delete-card.component.scss']
})
export class ModalDeleteCardComponent implements OnDestroy {

  protected loading: boolean
  private _destroyObservable = new Subject()
  constructor(
    private readonly _dialogRef: MatDialogRef<ModalDeleteCardComponent>,
    private readonly _kanbanService: KanbanService,
    private readonly _snackBarService: SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }) { }

  deleteCard(): void {
    this._kanbanService.deleteTask(this.data.id)
      .pipe(takeUntil(this._destroyObservable), finalize(() => this.loading = false))
      .subscribe(({
        next: (_) => {
          this._snackBarService.open(GlobalEnums.SUCCESS, `Card deletado com sucesso`)
          this._dialogRef.close(true)
        },
        error: (_) => {
          this._snackBarService.open(GlobalEnums.ERROR, `Não foi possível deletar o card`)
        }
      }))
  }

  ngOnDestroy(): void {
    this._destroyObservable.next(null)
    this._destroyObservable.complete()
  }

}
