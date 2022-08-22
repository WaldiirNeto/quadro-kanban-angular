import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatMenuModule } from '@angular/material/menu'
import { ReactiveFormsModule } from '@angular/forms'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { QuillModule } from 'ngx-quill'

import { KanbanRoutingModule } from './kanban-routing.module'
import { KanbanComponent } from './kanban.component'
import { ModalCreateTaskComponent } from './components/modal-create-task/modal-create-task.component'
import { CardComponent } from './components/card/card.component'
import { ButtonCreateTaskComponent } from './components/button-create-task/button-create-task.component'
import { SnackBarService } from '@shared/services/snackbar.service'
import { LoaderComponent } from '@shared/components/loader/loader.component'
import { ModalDeleteCardComponent } from './components/modal-delete-card/modal-delete-card.component'
import { KanbanService } from './services/kanban.service'


@NgModule({
  declarations: [
    KanbanComponent,
    ModalCreateTaskComponent,
    CardComponent,
    ButtonCreateTaskComponent,
    ModalDeleteCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    KanbanRoutingModule,
    MatSnackBarModule,
    LoaderComponent,
    MatProgressSpinnerModule,
    MatMenuModule,
    DragDropModule
  ],
  providers: [SnackBarService, KanbanService]
})
export class KanbanModule { }
