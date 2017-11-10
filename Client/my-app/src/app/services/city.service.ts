import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { City } from '../Models/City';
import 'rxjs/add/operator/map';
import { BaseService } from './base.service';


@Injectable()
export class CityService extends BaseService{

	public apiUrl: string;

	cities: City[] = [];

	constructor(private http: Http) {
		super();
		
		
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
