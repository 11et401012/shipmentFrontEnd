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
  private active: boolean = false;

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
    if (container.containerStatus.containerStatus === "draft") {
      localStorage.setItem('containerId', container._id)
      this.router.navigateByUrl('/new-shipment');
    } else {
      alert("sorry this container in transit or completed")
    }
  }

  onClickOutside(event: Object) {
    if (event && event['value'] === true) {
      this.active = false;
    }

  }

  updateStatus(event, container) {
    console.log(event.target.value)
    let obj = {
      status: event.target.value
    }

    this.containerService.updateContainerStatus(obj, container._id).subscribe((data: any) => {
      console.log(data);
    })


  }
  // Close the dropdown if the user clicks outside of it
}
