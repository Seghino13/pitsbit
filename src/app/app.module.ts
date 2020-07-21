import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './layout/layout.module';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { GraphQlService } from './services/graph-ql/graph-ql.service';
import { RestService } from './services/rest/rest.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule
  ],
  providers: [ GraphQlService, RestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
