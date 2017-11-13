import { Component, OnInit } from '@angular/core';
import { PersonSchedule } from "../../Models/PersonSchedule";
import { ColumnConfig } from "app/table/table.component";
import { ZNOService } from '../../services/zno.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-person-schedule',
  templateUrl: './person-schedule.component.html',
  styleUrls: ['./person-schedule.component.css']
})

export class PersonScheduleComponent implements OnInit {

	personId: number;
	schedule: PersonSchedule[] = [];
	columns: ColumnConfig[] = [];
	patternChanged: Subject<number>;


	constructor(private znoService: ZNOService) {
		this.columns = [
		
			<ColumnConfig>{ propName: 'schoolName', header: "School" },
			<ColumnConfig>{ propName: 'subject', header: "Subject" },
			<ColumnConfig>{ propName: 'className', header: "Class" },
			<ColumnConfig>{ propName: 'date', header: "Date", type: "Date" },
			<ColumnConfig>{ propName: 'score', header: "Score" }

		];
		this.patternChanged = new Subject<number>();
	}

	ngOnInit() {
		this.patternChanged.debounceTime(500).distinctUntilChanged().subscribe(result => {
			this.personId = result;
			this.znoService.GetPersonSchedule(this.personId).subscribe(res => {
				if (res) {
					this.schedule = res;
				}
			});

		});
  }

}
