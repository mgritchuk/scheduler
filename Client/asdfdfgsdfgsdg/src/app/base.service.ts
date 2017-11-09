import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { News } from './Models/News';
import 'rxjs/add/operator/map';
@Injectable()
export class BaseService {

	public apiUrl: string;
	constructor(private http: Http) {
		this.apiUrl = environment.apiUrl;
	}

	GetNews(): Observable<News[]> {
		return this.http.get(this.apiUrl + "api/NewsItems/GetNewsItemsPublic")
			.map(response => response.json() as News[]);
		
	}

	Test(): Observable<any[]> {
		return this.http.get(this.apiUrl + "api/values")
			.map(response => response.json());
         
	}

}
