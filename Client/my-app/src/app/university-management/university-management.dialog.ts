import { Component, OnInit, Input } from '@angular/core';
import { University } from "../Models/University";
import { City } from "../Models/City";
import { MatDialog, MatDialogRef } from '@angular/material';
import { ColumnConfig } from "app/table/table.component";
import { ZNOService } from '../services/zno.service';

@Component({
  selector: 'app-university-management-dialog',
  templateUrl: './university-management.component.html',
  styleUrls: ['./university-management.component.css']
})
export class UniversityManagementDialog implements OnInit {

	@Input() universities: University[] = [];
	@Input() city: City;
	columns: ColumnConfig[] = [];


	constructor(private znoService: ZNOService) {
		this.columns = [
			<ColumnConfig>{ propName: 'name', header: "Name" },
			<ColumnConfig>{ propName: 'address', header: "Address" }

		];
	}

	ngOnInit() {
		this.znoService.GetUniversities(this.city.id).subscribe(res => {
			if (res) {
				this.universities = res;
			}
		});
  }

}