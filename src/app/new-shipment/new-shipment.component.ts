import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { containerService } from "../services/container.service";

@Component({
  selector: 'app-new-shipment',
  templateUrl: './new-shipment.component.html',
  styleUrls: ['./new-shipment.component.scss']
})
export class NewShipmentComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText = 'Insert';

  constructor(private formBuilder: FormBuilder, private Router: Router, private containerService: containerService) { }



  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      shipName: ['', Validators.required],
      shipWeight: ['', Validators.required],
      shipValume: ['', Validators.required],
      containerId: [localStorage.getItem('containerId'), Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.containerService.saveShipment(this.registerForm.value).subscribe((data: any) => {
      console.log("data", data);
      if (data['success']) {
        this.Router.navigateByUrl('/shipment');
      }
    })

  }

}
