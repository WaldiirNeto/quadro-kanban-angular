import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PrivateRoutingModule } from './private-routing.module'
import { PrivateComponent } from './private.component'
import { NavbarComponent } from '@shared/components/navbar/navbar.component'


@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    NavbarComponent
  ]
})
export class PrivateModule { }
