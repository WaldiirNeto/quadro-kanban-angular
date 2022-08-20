import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ModalCreateTaskComponent } from './components/modal-create-task/modal-create-task.component'

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  constructor(public readonly _dialog: MatDialog) { }


  ngOnInit(): void {
  }

  public openDialog(): void {
    this._dialog.open(ModalCreateTaskComponent, {
      width: `500px`,
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `1000ms`,
      backdropClass: 'backdropBackground'
    })
  }

}
