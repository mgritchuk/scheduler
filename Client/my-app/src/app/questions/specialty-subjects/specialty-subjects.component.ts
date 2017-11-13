import { Component, OnInit } from '@angular/core';
import { SpecialtySubject } from "../../Models/SpecialtySubject";
import { ColumnConfig } from "app/table/table.component";
import { ZNOService } from '../../services/zno.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-specialty-subjects',
  templateUrl: './specialty-subjects.component.html',
  styleUrls: ['./specialty-subjects.component.css']
})


export class SpecialtySubjectsComponent implements OnInit {

	specId: number;
	univerId: number;
	data: SpecialtySubject[] = [];
	columns: ColumnConfig[] = [];


	constructor(private znoService: ZNOService) {
		this.columns = [

			<ColumnConfig>{ propName: 'id', header: "ID" },
			<ColumnConfig>{ propName: 'name', header: "name" },
			<ColumnConfig>{ propName: 'universityName', header: "University" }
		];

	}

  ngOnInit() {
;
  }

  accept() {
	  if (this.specId != null) {
		  this.znoService.GetSpecialtySubjects(this.specId, this.univerId).subscribe(res => {
			  if (res) {
				  
				  this.data = res;
			  }
		  });
	  }
  }

}
