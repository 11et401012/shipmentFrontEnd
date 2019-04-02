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

  saveContainer(Container: any) {
    return this.http.post(`${this.Backend_API}container/`, JSON.stringify(Container), { headers: httpOptions.headers })

  }

  saveShipment(shipment: any) {
    return this.http.post(`${this.Backend_API}shipment`, JSON.stringify(shipment), { headers: httpOptions.headers })

  }
  deleteShipment(shipmentId: any) {
    return this.http.delete(`${this.Backend_API}shipment/?shipmentId=${shipmentId}`)

  }
  updateContainerStatus(status: any, Id: any) {
    return this.http.put(`${this.Backend_API}container/?containerId=${Id}`, JSON.stringify(status), { headers: httpOptions.headers })

  }

  fetchContainer() {
    return this.http.get(`${this.Backend_API}container`)
  }

  fetchShipment() {
    return this.http.get(`${this.Backend_API}shipment`)
  }

}
