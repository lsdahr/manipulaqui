import { Component, VERSION } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Fb Angular ';

  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  loginE() {
    this.authService.loginE(this.email, this.password);
    this.email = this.password = '';
  }
  loginG() {
    this.authService.loginG();
  }
  logout() {
    this.authService.logout();
  }
}
