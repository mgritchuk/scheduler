import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { University } from '../Models/University';
import { PersonSchedule } from '../Models/PersonSchedule';
import { SchoolSchedule } from '../Models/SchoolSchedule';
import { SpecialtySubject } from '../Models/SpecialtySubject';
import { UniversitySpecialty } from '../Models/UniversitySpecialty';
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

	GetUniversitySpecialties(univerId: number): Observable<UniversitySpecialty[]> {
		return this.http.get(this.apiUrl + "api/ZNO/GetUniversitySpecialties?univerId=" + univerId)
			.map(response => response.json() as UniversitySpecialty[]);

	}

	GetPersonSchedule(personId: number): Observable<PersonSchedule[]> {
		return this.http.get(this.apiUrl + "api/ZNO/GetPersonSchedule?personId=" + personId)
			.map(response => response.json() as PersonSchedule[]);
	}

	GetSchoolSchedule(schoolId: number): Observable<SchoolSchedule[]> {
		return this.http.get(this.apiUrl + "api/ZNO/GetSchoolSchedule?schoolId=" + schoolId)
			.map(response => response.json() as SchoolSchedule[]);
	}

	GetSpecialtySubjects(specId: number, univerId: number): Observable<SpecialtySubject[]> {
		return this.http.get(this.apiUrl + "api/ZNO/GetSpecialtySubjects?specId=" + specId + "&univerId=" + univerId)
			.map(response => response.json() as SpecialtySubject[]);
	}


}
