import { Component, OnInit } from '@angular/core';
import { CityService, CityDataSource, ExampleDatabase } from '../services/city.service';
import { City } from '../Models/City';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ColumnConfig } from '../table/table.component';

@Component({
  selector: 'app-city-management',
  templateUrl: './city-management.component.html',
  styleUrls: ['./city-management.component.css']
})
export class CityManagementComponent implements OnInit {

	cities: City[] = [];
	displayedColumns = ['Id', 'Name'];
	dataSource: CityDataSource | null;
	dataChange: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);
	get data(): City[] { return this.dataChange.value; }
	columns: ColumnConfig[] = [];
	exampleDatabase: ExampleDatabase;
	

	constructor(private cityService: CityService) {
		this.columns = [
			<ColumnConfig>{ propName: 'Id', header: "Id", width: '100px' },
			<ColumnConfig>{ propName: 'Name', header: "Name" },
			
		];
		this.exampleDatabase = new ExampleDatabase(this.cityService);
}

	ngOnInit() {
		this.cityService.GetCities().subscribe(res => {
			if (res) {
				this.cities = res;
			}
		});
//	  if (this.exampleDatabase.dataChange.value.length != 0)
//	    this.dataSource = new CityDataSource(this.exampleDatabase);
		  
	  

  }

}
