import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
	MatCheckboxModule, MatSelectModule, MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatMenuModule, MatTabsModule, MatToolbarModule, MatProgressBarModule,
	MatSnackBarModule, MatRadioModule, MatListModule, /*MatCoreModule,*/ MatAutocompleteModule, MatChipsModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { BaseService } from './base.service';
import { CityService } from './services/city.service';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { } from '@angular/cdk';
import { CityManagementComponent } from './city-management/city-management.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
	  CityManagementComponent
	  , TableComponent
  ],
  imports: [
	  BrowserModule,
	  HttpModule,
	  MatTableModule,
	  CdkTableModule,
	  FormsModule,
	  MatRadioModule,
	  MatCheckboxModule,
	  MatSelectModule,
	  MatButtonModule,
	  MatCardModule,
	  MatDialogModule,
	  MatIconModule,
	  MatInputModule,
	  MatSlideToggleModule,
	  MatMenuModule,
	  MatTabsModule,
	  MatToolbarModule,
	  MatProgressBarModule,
	  MatSnackBarModule,
	  MatRadioModule,
	  MatListModule,
	  //MatCoreModule,
	  MatAutocompleteModule,
	  MatChipsModule
  ],
  providers: [
	  BaseService,
	  CityService
	 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
