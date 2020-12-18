import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { FormateurComponent } from './formateur/formateur.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { CmComponent } from './cm/cm.component';
import { HomeComponent } from './home/home.component';
import { AuthentificationGuard } from './service/authentification/authentification.guard';
import { RouterModule } from '@angular/router';
import { TokenInterceptor } from './authentification/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    PageNotFoundComponent,
    AdminComponent,
    FormateurComponent,
    ApprenantComponent,
    CmComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthentificationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
