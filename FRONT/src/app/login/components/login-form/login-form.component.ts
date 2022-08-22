import { Component, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { LocalstorageService } from '@core/services/localstorage.service'
import { GlobalEnums } from '@shared/enums/global-enums.enum'
import { SnackBarService } from '@shared/services/snackbar.service'
import { finalize, Subject, takeUntil } from 'rxjs'
import { LoginModel } from '../../models'
import { FormLoginModel } from '../../models/login-form.model'
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends FormLoginModel implements OnDestroy {

  protected loading: boolean
  private _destroyObservable = new Subject()
  constructor(
    private readonly _loginService: LoginService,
    private readonly _localStorageService: LocalstorageService,
    private readonly _snackBarService: SnackBarService,
    private readonly _router: Router) {
    super()
  }

  public authenticate(): void {
    this.loading = true
    const loginParams = this.form.value as LoginModel
    this._loginService
      .login(loginParams)
      .pipe(
        takeUntil(this._destroyObservable),
        finalize(() => this.loading = false)
      )
      .subscribe(
        {
          next: (tokenJwt: string) => {
            this.checkTokenJwt(tokenJwt)
          },
          error: (_) => {
            this._snackBarService.open(GlobalEnums.ERROR, `Não foi possível realizar a solicitação`)
          }
        }
      )
  }

  private checkTokenJwt(tokenJwt: string): void {
    if (tokenJwt) {
      this._localStorageService.setItem(GlobalEnums.TOKEN_KANBAN, tokenJwt)
      this._router.navigate(['kanban'])
    } else {
      this._snackBarService.open(GlobalEnums.ERROR, `Usuário não encontrado`)
    }
  }

  ngOnDestroy(): void {
    this._destroyObservable.next(null)
    this._destroyObservable.complete()
  }

}
