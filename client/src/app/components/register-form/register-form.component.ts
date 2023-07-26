import { Component } from '@angular/core';
import { LoginData } from '../login-form/login-form.component';
import { AxiosService } from 'src/app/services/axios.service';

export interface RegisterData extends LoginData {}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  constructor(private axiosService: AxiosService) {}

  registerData: RegisterData = {
    email: '',
    password: '',
  };

  onRegister(): void {
    console.log({
      email: this.registerData.email,
      password: this.registerData.password,
    });
    this.axiosService
      .request('post', '/auth/register', {
        email: this.registerData.email,
        password: this.registerData.password,
      })
      .then((response) => {
        this.axiosService.setAuthToken(response.data.token);
      });
  }
}
