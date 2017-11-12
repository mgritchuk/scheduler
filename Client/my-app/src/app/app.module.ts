import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
	MatCheckboxModule, MatSelectModule, MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatMenuModule, MatTabsModule, MatToolbarModule, MatProgressBarModule,
	MatSnackBarModule, MatRadioModule, MatListModule, MatAutocompleteModule, MatChipsModule
} from '@angular/material';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaginationPipe } from './table/pagiantion.pipe';
import { AppComponent } from './app.component';
//import { TestComponentComponent } from './test-component/test-component.component';
//services
import { BaseService } from './base.service';
import { CityService } from './services/city.service';
import { ZNOService } from './services/zno.service';
import { SchoolService } from './services/school.service';

//components
import { CityManagementComponent } from './city-management/city-management.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { UniversityManagementComponent } from './university-management/university-management.component';
import { UniversityManagementDialog } from './university-management/university-management.dialog';
import { RouterModule, Routes } from '@angular/router';
import { SchoolManagementComponent } from './school-management/school-management.component';
import { SchoolManagementDialog } from './school-management/school-management.dialog';
import { SchoolDetailsComponent } from './school-management/school-details/school-details.component';

const appRoutes: Routes = [
	{
		path: 'univers',
		component: CityManagementComponent,
		children: [
			{
				path: '',
				component: CityManagementComponent
			},
			{
				path: ':index',
				component: UniversityManagementDialog
				
			}],
		data: {
			isSchoolScreen: false
		}
	},
	{
		path: 'schools',
		component: CityManagementComponent,
		data: {
			isSchoolScreen: true
		},
		//children: [
		//	{
		//		path: '',
		//		component: CityManagementComponent
		//	},
		//	{
		//		path: 'details',
		//		component: SchoolDetailsComponent
		//	}
		//]
	},
	{
		path: 'details/:id',
		component: SchoolDetailsComponent
	}
];

@NgModule({
  declarations: [
    AppComponent,
    
	  CityManagementComponent,
	  TableComponent,
	  PaginationPipe,
	  UniversityManagementComponent,
	  UniversityManagementDialog,
	  SchoolManagementDialog,
	  SchoolManagementComponent,
	  SchoolDetailsComponent
  ],
  imports: [
	  RouterModule.forRoot(
		  appRoutes,
		  {enableTracing: true}
	  ),
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
	  CityService,
	  ZNOService,
	  SchoolService

  ], exports: [
	  PaginationPipe,
	  FlexLayoutModule,
	  UniversityManagementDialog,
    SchoolManagementDialog
  ],
  entryComponents: [
	  UniversityManagementDialog,
	  SchoolManagementDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
