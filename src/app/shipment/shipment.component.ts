import { Component, OnInit } from '@angular/core';
import { containerService } from "../services/container.service";
@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {
  Shipment: any[];
  constructor(private containerService: containerService) {

    this.Shipment = [];
  }

  ngOnInit() {

    this.fetchshipment();
  }

  fetchshipment() {
    this.containerService.fetchShipment().subscribe((data: any) => {
      if (data['success']) {
        this.Shipment = data.shipment;
      }
    })

  }

  deleteshipment(event: any, ship: any) {

  }

}
