import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { NewContainerComponent } from './new-container/new-container.component';
import { HeaderComponent } from './header/header.component';
import { containerService } from './services/container.service';
import { NewShipmentComponent } from './new-shipment/new-shipment.component';
import { EditContainerComponent } from './edit-container/edit-container.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ShipmentComponent,
    NewContainerComponent,
    HeaderComponent,
    NewShipmentComponent,
    EditContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [containerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
