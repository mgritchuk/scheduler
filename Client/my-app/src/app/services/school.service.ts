import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { School } from '../Models/School';
import 'rxjs/add/operator/map';
import { BaseService } from './base.service';


@Injectable()
export class SchoolService extends BaseService {

	constructor(private http: Http) {
		super();
	}
	GetSchoolsByCityId(id: number) : Observable<School[]> {
		return this.http.get(this.apiUrl + "api/School/GetByCityId?id=" + id)
			.map(response => response.json() as School[]);
  }

	
}
