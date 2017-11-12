import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { City } from '../Models/City';
import { MatDialog } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ColumnConfig } from '../table/table.component';
import { ZNOService } from '../services/zno.service';
import { University } from '../Models/University';
import { UniversityManagementDialog } from '../university-management/university-management.dialog';
import { SchoolManagementDialog } from '../school-management/school-management.dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-management',
  templateUrl: './city-management.component.html',
  styleUrls: ['./city-management.component.css']
})
export class CityManagementComponent implements OnInit {

	cities: City[] = [];
	displayedColumns = ['Id', 'Name'];
	
	//dataChange: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);
	//get data(): City[] { return this.dataChange.value; }
	columns: ColumnConfig[] = [];
	cityUnivers: University[] = [];
	

	constructor(
		private cityService: CityService,
		private znoService: ZNOService,
		private dialog: MatDialog,
		private route: ActivatedRoute) {
		this.columns = [
			<ColumnConfig>{ propName: 'id', header: "Id", width: '100px' },
			<ColumnConfig>{ propName: 'name', header: "Name" },
			
		];
}

	ngOnInit() {
		this.cityService.GetCities().subscribe(res => {
			if (res) {
				this.cities = res;
			}
		});

  }

	onEdit(city: City) {

		let isSchoolScreen = this.route.snapshot.data['isSchoolScreen'];
		if (isSchoolScreen){
			let dialogRef = this.dialog.open(SchoolManagementDialog);
			dialogRef.componentInstance.city = city;
		} else {
			let dialogRef = this.dialog.open(UniversityManagementDialog);
			dialogRef.componentInstance.city = city;
		}
				
				
			
		
	}


}
