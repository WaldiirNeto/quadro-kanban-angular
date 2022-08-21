import { DialogRef } from '@angular/cdk/dialog'
import { Component, OnDestroy } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { GlobalEnums } from '@shared/enums/global-enums.enum'
import { SnackBarService } from '@shared/services/snackbar.service'
import { finalize, Subject, takeUntil } from 'rxjs'
import { CardCreateModel } from '../../models/card.model'
import { FormTaskModel } from '../../models/form-task.model'
import { KanbanService } from '../../services/kanban.service'

@Component({
  selector: 'app-modal-create-task',
  templateUrl: './modal-create-task.component.html',
  styleUrls: ['./modal-create-task.component.scss']
})
export class ModalCreateTaskComponent extends FormTaskModel implements OnDestroy {

  protected loading: boolean
  private _destroyObservable$ = new Subject()
  constructor(
    private readonly _kanbanService: KanbanService,
    private readonly _snackBarService: SnackBarService,
    private readonly _dialogRef: MatDialogRef<ModalCreateTaskComponent>) {
    super()
  }

  public createTask(): void {
    this.loading = true
    const payload = this.form.value as CardCreateModel
    this._kanbanService.createTask(payload)
      .pipe(
        takeUntil(this._destroyObservable$),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (_) => {
          this._dialogRef.close({})
          this._snackBarService.open(GlobalEnums.SUCCESS, 'Tarefa criada com sucesso')
        },
        error: (_) => {
          this._snackBarService.open(GlobalEnums.ERROR, 'Não foi possível cadastrar a tarefa')
        }
      })
  }

  ngOnDestroy(): void {
    this._destroyObservable$.next(null)
    this._destroyObservable$.complete()
  }

}
