import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { City } from '../Models/City';
import 'rxjs/add/operator/map';
import { BaseService } from './base.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DataSource } from '@angular/cdk/collections';

@Injectable()
export class CityService extends BaseService{

	public apiUrl: string;

	cities: City[] = [];

	constructor(private http: Http) {
		super();
		this.GetCities().subscribe(res => {
			if (res) {
				this.cities = res;
			}
		});
		
	}

	GetCities(): Observable<City[]> {
		return this.http.get(this.apiUrl + "api/City/Get")
			.map(response => response.json() as City[]);

	}

	DeleteCity(Id: number): Observable<any> {
		return this.http.delete(this.apiUrl + "api/City/Delete?Id=" + Id)
			.map(response => response.json());

	}


}

export class CityDataSource extends DataSource<any> {

	constructor(public exampleDatabase: ExampleDatabase) {
		super();
	}

	connect(): Observable<City[]> {
		//this.service.GetCities().subscribe(res => {
		//	if (res) {
		//		return res as City[];
		//	}
		//});
		//return new Observable<City[]>();
		return this.exampleDatabase.dataChange;
	}

	disconnect() { }
}

export class ExampleDatabase {
	/** Stream that emits whenever the data has been modified. */
	dataChange: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);
	get data(): City[] {
		return this.dataChange.value;
	};

	constructor(private citiesService: CityService) {
		// Fill up the database with 100 users.
		let res: City[] = [];
		res.push({Id : 1, Name : 'dsfsdf' });
		res.push({Id : 2, Name : 'dsfsdf' });
		this.dataChange.next(res);
		//this.citiesService.GetCities().subscribe(res => {
		//	if (res) {
				
				
		//	}
		//});
		
	}

	
	
}
