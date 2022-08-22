import { HttpErrorResponse } from '@angular/common/http'
import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { GlobalEnums } from '@shared/enums/global-enums.enum'
import { SnackBarService } from '@shared/services/snackbar.service'
import { finalize, Subject, takeUntil } from 'rxjs'
import { CardModel } from '../../models/card.model'
import { FormTaskModel } from '../../models/form-task.model'
import { KanbanService } from '../../services/kanban.service'

@Component({
  selector: 'app-modal-create-task',
  templateUrl: './modal-create-task.component.html',
  styleUrls: ['./modal-create-task.component.scss']
})
export class ModalCreateTaskComponent extends FormTaskModel implements OnInit, OnDestroy {

  protected loading: boolean
  private _destroyObservable$ = new Subject()

  constructor(
    private readonly _kanbanService: KanbanService,
    private readonly _snackBarService: SnackBarService,
    private readonly _dialogRef: MatDialogRef<ModalCreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: CardModel }) {
    super()
  }

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data.task)
    }
  }

  public onSubmit(): void {
    const payload = this.form.value as CardModel
    if (this.data) {
      this._editTaskt(payload)
    } else {
      this._createTask(payload)
    }
  }

  private _createTask(payload: CardModel): void {
    this.loading = true
    this._kanbanService.createTask(payload)
      .pipe(
        takeUntil(this._destroyObservable$),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (_) => {
          this._dialogRef.close(true)
          this._snackBarService.open(GlobalEnums.SUCCESS, 'Tarefa criada com sucesso')
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 400) {
            this._snackBarService.open(GlobalEnums.ERROR, 'Não foi possível cadastrar a tarefa')
          }
        }
      })
  }

  private _editTaskt(payload: CardModel): void {
    this.loading = true

    this._kanbanService.editTask(payload)
      .pipe(
        takeUntil(this._destroyObservable$),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (_) => {
          this._dialogRef.close(true)
          this._snackBarService.open(GlobalEnums.SUCCESS, 'Tarefa criada com sucesso')
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 400) {
            this._snackBarService.open(GlobalEnums.ERROR, 'Não foi possível editar a tarefa')
          }
        }
      })
  }

  ngOnDestroy(): void {
    this._destroyObservable$.next(null)
    this._destroyObservable$.complete()
  }

}
