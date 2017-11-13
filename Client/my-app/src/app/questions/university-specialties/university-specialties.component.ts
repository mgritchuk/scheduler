import { Component, OnInit } from '@angular/core';
import { UniversitySpecialty } from "../../Models/UniversitySpecialty";
import { ColumnConfig } from "app/table/table.component";
import { ZNOService } from '../../services/zno.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-university-specialties',
  templateUrl: './university-specialties.component.html',
  styleUrls: ['./university-specialties.component.css']
})
export class UniversitySpecialtiesComponent implements OnInit {

	univerId: number;
	universitySpecialties: UniversitySpecialty[] = [];
	columns: ColumnConfig[] = [];
	patternChanged: Subject<number>;

	constructor(private znoService: ZNOService) {
		this.columns = [
			<ColumnConfig>{ propName: 'id', header: "ID" },
			<ColumnConfig>{ propName: 'name', header: "Name" }

		];
		this.patternChanged = new Subject<number>();
	}

	ngOnInit() {
		this.patternChanged.debounceTime(500).distinctUntilChanged().subscribe(result => {
			this.univerId = result;
			this.znoService.GetUniversitySpecialties(this.univerId).subscribe(res => {
				if (res) {
					this.universitySpecialties = res;
				}
			});

		});
  }

}
