import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { BaseService } from './base.service';

import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { } from '@angular/cdk';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
	  BrowserModule,
	  HttpModule,
	  MatTableModule,
	  CdkTableModule
  ],
  providers: [
	  BaseService,
	 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
