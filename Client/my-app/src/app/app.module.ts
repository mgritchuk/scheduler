import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
	MatCheckboxModule, MatSelectModule, MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatMenuModule, MatTabsModule, MatToolbarModule, MatProgressBarModule,
	MatSnackBarModule, MatRadioModule, MatListModule, MatAutocompleteModule, MatChipsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PaginationPipe } from './table/pagiantion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
	  CityManagementComponent
	  , TableComponent,
	  PaginationPipe
  ],
  imports: [
	  BrowserAnimationsModule,
	  BrowserModule,
	  HttpModule,
	  FlexLayoutModule,
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
	  MatChipsModule,
	  
  ],
  providers: [
	  BaseService,
	  CityService

  ], exports: [PaginationPipe, FlexLayoutModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
