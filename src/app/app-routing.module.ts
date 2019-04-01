import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../app/container/container.component';
import { ShipmentComponent } from '../app/shipment/shipment.component';
import { NewContainerComponent } from '../app/new-container/new-container.component'

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'shipment', component: ShipmentComponent },
  { path: 'new-container', component: NewContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
