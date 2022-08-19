import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './pages/login.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { LoginService } from './services/login.service'
import { LoaderComponent } from '@shared/components/loader/loader.component'
import { SnackBarService } from '@shared/services/snackbar.service'
import { MatSnackBarModule } from '@angular/material/snack-bar'


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    LoaderComponent,
    MatSnackBarModule
  ],
  providers: [LoginService, SnackBarService]
})
export class LoginModule { }
