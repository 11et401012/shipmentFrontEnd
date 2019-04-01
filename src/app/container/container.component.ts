import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  container: any[];
  constructor() {

    this.container = [1, 2, 3, 4, 5, 1, 2, 3, 3, 3, 3]
  }

  ngOnInit() {
  }

}
