import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../../services/city.service';
import { SchoolService } from '../../services/school.service';
import { City } from '../../Models/City';
import { School } from '../../Models/School';
import { Person } from '../../Models/Person';
import { ClassRoom } from '../../Models/ClassRoom';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ColumnConfig } from '../../table/table.component';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent implements OnInit, OnDestroy {

	@Input() school: School;
	pupils: Person[] = [];
	teachers: Person[] = [];
	classRooms: ClassRoom[] = [];

	id: number;
	sub: any;

	teacherColumns: ColumnConfig[] = [];
	pupilsColumns: ColumnConfig[] = [];
	classColumns: ColumnConfig[] = [];

	constructor(private schoolService: SchoolService, private route: ActivatedRoute) {
		this.classColumns = [
			<ColumnConfig>{ propName: 'name', header: "Name" },
			<ColumnConfig>{ propName: 'seats', header: "Seats"},
		];

		this.pupilsColumns = [
			<ColumnConfig>{ propName: 'id', header: "ID" },
			<ColumnConfig>{ propName: 'lastName', header: "Last name" },
			<ColumnConfig>{ propName: 'firstName', header: "First name" },
		];
		this.teacherColumns = this.pupilsColumns;
	}
  


	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id']; // (+) converts string 'id' to a number
		
		  this.schoolService.GetSchoolClassRooms(this.id).subscribe(res => {
			  if (res) {
				  this.classRooms = res;
			  }
		  });
		  this.schoolService.GetSchoolPupils(this.id).subscribe(res => {
			  if (res) {
				  this.pupils = res;
			  }
		  });
		  this.schoolService.GetSchoolTeachers(this.id).subscribe(res => {
			  if (res) {
				  this.teachers = res;
			  }
		  });
		});
  }

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
