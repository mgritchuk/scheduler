import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
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
	
	dataChange: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);
	get data(): City[] { return this.dataChange.value; }
	columns: ColumnConfig[] = [];
	
	

	constructor(private cityService: CityService) {
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

}
