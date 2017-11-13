import { Component, OnInit } from '@angular/core';
import { SchoolSchedule } from "../../Models/SchoolSchedule";
import { ColumnConfig } from "app/table/table.component";
import { ZNOService } from '../../services/zno.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-school-schedule',
  templateUrl: './school-schedule.component.html',
  styleUrls: ['./school-schedule.component.css']
})

export class SchoolScheduleComponent implements OnInit {


	schoolId: number;
	schedule: SchoolSchedule[] = [];
	columns: ColumnConfig[] = [];
	patternChanged: Subject<number>;

	constructor(private znoService: ZNOService) {

		this.columns = [
			<ColumnConfig>{ propName: 'schoolName', header: "School" },
			<ColumnConfig>{ propName: 'subject', header: "Subject" },
			<ColumnConfig>{ propName: 'className', header: "Class" },
			<ColumnConfig>{ propName: 'date', header: "Date", type: "Date" }
		];

		this.patternChanged = new Subject<number>();
	}

  ngOnInit() {
	  this.patternChanged.debounceTime(500).distinctUntilChanged().subscribe(result => {
		  this.schoolId = result;
		  this.znoService.GetSchoolSchedule(this.schoolId).subscribe(res => {
			  if (res) {
				  this.schedule = res;
			  }
		  });

	  });
  }

}
