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
    console.log("ok");
    this.containerService.deleteShipment(ship._id).subscribe((data: any) => {
      if (data['success']) {
        // this.Shipment = data.shipment;
        let index = this.Shipment.findIndex(x => x._id == ship._id);
        console.log(index);
        this.Shipment.splice(index, 1);
      }
    })
  }

}
