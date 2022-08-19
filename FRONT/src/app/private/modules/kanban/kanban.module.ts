import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanComponent } from './kanban.component';


@NgModule({
  declarations: [
    KanbanComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule
  ]
})
export class KanbanModule { }
