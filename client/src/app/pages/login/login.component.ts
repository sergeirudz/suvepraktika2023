import { Component } from '@angular/core';
import { LoginData } from 'src/app/components/login-form/login-form.component';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private axiosService: AxiosService) {}

  onLogin(data: LoginData): void {
    console.log(data);
    this.axiosService.request('post', '/auth/login', data);
  }
}
