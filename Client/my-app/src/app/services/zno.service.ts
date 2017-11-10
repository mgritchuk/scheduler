import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { University } from '../Models/University';
import 'rxjs/add/operator/map';
import { BaseService } from './base.service';


@Injectable()
export class ZNOService extends BaseService {

	constructor(private http: Http) {
		super();


	}

	GetUniversities(cityId: number): Observable<University[]> {
		return this.http.get(this.apiUrl + "api/ZNO/GetUniversities?cityId=" + cityId)
			.map(response => response.json() as University[]);

	}

	DeleteCity(Id: number): Observable<any> {
		return this.http.delete(this.apiUrl + "api/City/Delete?Id=" + Id)
			.map(response => response.json());

	}


}
