import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../appsetting/index';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class containerService {
  Backend_API: string;


  constructor(private http: HttpClient) {
    this.Backend_API = AppSettings.Backend_API;
  }

  saveContainer(saveContainer: any) {
    return this.http.post(`${this.Backend_API}container/`, JSON.stringify(saveContainer), { headers: httpOptions.headers })

  }

  fetchContainer() {
    return this.http.get(`${this.Backend_API}container/`)
  }

}
