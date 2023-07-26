import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080/api/v1';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  setAuthToken(token: string): void {
    if (token !== null) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  request(method: string, url: string, data?: any) {
    let headers = {};

    if (this.getAuthToken()) {
      headers = {
        Authorization: `Bearer ${this.getAuthToken()}`,
      };
    }

    return axios.request({
      method,
      url,
      data,
      headers,
    });
  }
}
