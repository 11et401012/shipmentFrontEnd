import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { containerService } from "../services/container.service";
import { async } from 'q';
//import { fadeInAnimation } from '../animation/index';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  //animations: [fadeInAnimation],
})
export class ContainerComponent implements OnInit {
  container: any[];
  router: Router;
  constructor(_router: Router, private containerService: containerService) {

    this.router = _router;
  }

  ngOnInit() {
    this.fetchAllContainer();
  }

  fetchAllContainer() {

    this.containerService.fetchContainer().subscribe((data: any) => {
      if (data['success']) {
        this.container = data.container;
      }
    })

  }
  createNewContainer(event) {
    this.router.navigateByUrl('/new-container');
  }

  AddShipment(container, event) {
    localStorage.setItem('containerId', container._id)
    this.router.navigateByUrl('/new-shipment');

  }
}
