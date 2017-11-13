import { Component, OnInit } from '@angular/core';
import { University } from "../../Models/University";
import { ColumnConfig } from "app/table/table.component";
import { ZNOService } from '../../services/zno.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-get-universities',
  templateUrl: './get-universities.component.html',
  styleUrls: ['./get-universities.component.css']
})
export class GetUniversitiesComponent implements OnInit {

	cityId: number;
	universities: University[] = [];
	columns: ColumnConfig[] = [];
	patternChanged: Subject<number>;

	constructor(private znoService: ZNOService) {
		this.columns = [
			<ColumnConfig>{ propName: 'name', header: "Name" },
			<ColumnConfig>{ propName: 'address', header: "Address" }

		];
		this.patternChanged = new Subject<number>();
	}

	ngOnInit() {
		this.patternChanged.debounceTime(500).distinctUntilChanged().subscribe(result => {
			this.cityId = result;
			this.znoService.GetUniversities(this.cityId).subscribe(res => {
			  if (res) {
				  this.universities = res;
			  }
		  });
		
		});
  }

}
