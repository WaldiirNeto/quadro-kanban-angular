import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'

import { KanbanRoutingModule } from './kanban-routing.module'
import { KanbanComponent } from './kanban.component';
import { ModalCreateTaskComponent } from './components/modal-create-task/modal-create-task.component';
import { CardComponent } from './components/card/card.component';
import { ButtonCreateTaskComponent } from './components/button-create-task/button-create-task.component'


@NgModule({
  declarations: [
    KanbanComponent,
    ModalCreateTaskComponent,
    CardComponent,
    ButtonCreateTaskComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    KanbanRoutingModule
  ]
})
export class KanbanModule { }
