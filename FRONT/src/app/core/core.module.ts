import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { HttpPublicClientService } from './http/http-public-client.service'
import { UnauthorizeInterceptor } from './interception/interceptor.interceptor'


@NgModule({
    imports: [HttpClientModule],
    exports: [HttpClientModule],
    providers: [HttpPublicClientService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UnauthorizeInterceptor,
            multi: true
        }]
})
export class CoreModule { }
