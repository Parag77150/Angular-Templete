import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from'@angular/forms';
import {ReactiveFormsModule} from'@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import {Ng2SearchPipeModule} from'ng2-search-filter';
import {NgxPaginationModule} from'ngx-pagination';
import {Ng2OrderModule} from'ng2-order-pipe';
import {ServiceWorkerModule} from '@angular/service-worker';
import { environment } from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
