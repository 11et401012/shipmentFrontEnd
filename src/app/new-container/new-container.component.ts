import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { containerService } from "../services/container.service";

@Component({
  selector: 'app-new-container',
  templateUrl: './new-container.component.html',
  styleUrls: ['./new-container.component.scss']
})
export class NewContainerComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText = 'Insert';

  constructor(private formBuilder: FormBuilder, private containerService : containerService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      containerName: ['', Validators.required]
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
    this.containerService.saveContainer(this.registerForm.value).subscribe((data:any)=>{
      console.log("data",data);
    })

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}

