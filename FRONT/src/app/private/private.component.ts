import { isPlatformBrowser } from '@angular/common'
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    @Inject(PLATFORM_ID) private _platformId: object) { }

  ngOnInit(): void {
    const { redirectAfterRender = '' } = this._route.snapshot.data
    if (redirectAfterRender && isPlatformBrowser(this._platformId)) {
      this._router.navigate([redirectAfterRender])
    }
  }

}
