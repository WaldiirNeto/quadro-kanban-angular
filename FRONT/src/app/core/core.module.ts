import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { HttpPublicClientService } from './http/http-public-client.service'


@NgModule({
    imports: [HttpClientModule],
    exports: [HttpClientModule],
    providers: [HttpPublicClientService]
})
export class CoreModule { }
