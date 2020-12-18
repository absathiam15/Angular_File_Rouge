import { Component, OnInit } from '@angular/core';
import { AuthentificationComponent } from '../authentification/authentification.component';
import { AuthentificationService } from '../authentification/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authentificationService: AuthentificationService
  ) { }

  ngOnInit() {
    console.log('Welcome home');
  }

  logout() {
    return this.authentificationService.logout();
  }
}
