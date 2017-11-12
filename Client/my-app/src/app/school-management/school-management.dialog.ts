import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ColumnConfig } from "app/table/table.component";
import { ZNOService } from '../services/zno.service';
import { ActivatedRoute } from '@angular/router';
import { City } from "../Models/City";
import { School } from '../Models/School';
import { SchoolService } from '../services/school.service';

@Component({
	selector: 'app-school-dialog',
	templateUrl: './school-management.component.html',
	styleUrls: ['./school-management.component.css']
})
export class SchoolManagementDialog implements OnInit {

	@Input() city: City;
	columns: ColumnConfig[] = [];
	schools: School[] = [];

	constructor(private route: ActivatedRoute, private schoolService: SchoolService) {
		this.columns = [
			<ColumnConfig>{ propName: 'name', header: "Name" },
			<ColumnConfig>{ propName: 'address', header: "Address" }
			//<ColumnConfig>{ propName: 'isReserve', header: "Is reserve" }
		];
	}

	ngOnInit() {
		this.schoolService.GetSchoolsByCityId(this.city.id).subscribe(res => {
			if (res) {
				this.schools = res;
			}
		});
	}

}
