import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ColumnConfig } from "app/table/table.component";
import { ZNOService } from '../services/zno.service';
import { ActivatedRoute, Router } from '@angular/router';
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

	constructor(private route: ActivatedRoute, private schoolService: SchoolService, private router: Router, public dialogRef: MatDialogRef<SchoolManagementDialog>) {
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

	onEdit(school: School) {
		this.dialogRef.close();
		this.router.navigate(['details/' + school.id.toString()], { relativeTo: this.route });
	}

}
