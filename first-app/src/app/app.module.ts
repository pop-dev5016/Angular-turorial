import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ComponentGoodComponent } from './component-good/component-good.component';
import { ComponentImageComponent } from './component-image/component-image.component';
import { CustoComponent } from './custo/custo.component';
import { SupplierComponent } from './supplier/supplier.component'

@NgModule({
  declarations: [
    AppComponent,
    ComponentGoodComponent,
    ComponentImageComponent,
    CustoComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
