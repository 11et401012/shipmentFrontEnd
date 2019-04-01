import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(_router: Router) {

    this.container = [1, 2, 3, 4, 5, 1, 2, 3, 3, 3, 3];
    this.router = _router;
  }

  ngOnInit() {
  }
  createNewContainer(event) {
    this.router.navigateByUrl('/new-container');
  }
}
