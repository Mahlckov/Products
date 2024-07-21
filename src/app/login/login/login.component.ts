import { Component } from '@angular/core';
import {User} from "../../core/models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user = new User();

  onLoggedin()
  {
    console.log(this.user);
  }
}
