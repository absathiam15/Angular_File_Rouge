import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthentificationService } from './authentification/authentification.service';
import { CmComponent } from './cm/cm.component';
import { FormateurComponent } from './formateur/formateur.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthentificationGuard } from './service/authentification/authentification.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthentificationComponent},
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'formateur', component: FormateurComponent},
  { path: 'apprenant', component: ApprenantComponent},
  { path: 'cm', component: CmComponent},
  { path: 'home', canActivate: [AuthentificationGuard], component: HomeComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthentificationGuard,
    AuthentificationService
  ]
})
export class AppRoutingModule { }
