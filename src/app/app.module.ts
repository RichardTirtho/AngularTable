import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestComponent } from './rest/rest.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const Material = [
  FormsModule,
  
]


@NgModule({
  declarations: [
    AppComponent,
    RestComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
