import { Component, EventEmitter, Output } from '@angular/core';
import { AxiosService } from 'src/app/services/axios.service';

export interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  constructor(private axiosService: AxiosService) {}
  @Output() onSubmitLoginEvent = new EventEmitter<LoginData>();

  loginData: Pick<LoginData, 'email' | 'password'> = {
    email: '',
    password: '',
  };

  onLogin(): void {
    console.log({
      email: this.loginData.email,
      password: this.loginData.password,
    });
    this.axiosService
      .request('post', '/auth/login', {
        email: this.loginData.email,
        password: this.loginData.password,
      })
      .then((response) => {
        this.axiosService.setAuthToken(response.data.token);
      });
  }
}
