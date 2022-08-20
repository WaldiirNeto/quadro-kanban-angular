import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { KanbanService } from '../../services/kanban.service'
import { ModalCreateTaskComponent } from '../modal-create-task/modal-create-task.component'

@Component({
  selector: 'app-button-create-task',
  templateUrl: './button-create-task.component.html',
  styleUrls: ['./button-create-task.component.scss']
})
export class ButtonCreateTaskComponent {

  constructor(private readonly _dialog: MatDialog) { }

  public openDialog(): void {
    this._dialog.open(ModalCreateTaskComponent, {
      width: `80%`,
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `1000ms`,
      backdropClass: 'backdropBackground'
    })
  }


}
