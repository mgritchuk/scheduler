import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { } from 'rxjs';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

export interface UserData {
	id: string;
	name: string;
	progress: string;
	color: string;
}

const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
	'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
	'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
	'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

	constructor(private baseService: BaseService) { }
	displayedColumns = ['userId', 'userName', 'progress', 'color'];
	exampleDatabase = new ExampleDatabase();
	dataSource: ExampleDataSource | null;
	news: any[] = [];

	onClick(name: string) {
		console.log(name);
	}

	ngOnInit() {
		this.dataSource = new ExampleDataSource(this.exampleDatabase);
		//this.baseService.Test().subscribe(res => {
		//	if (res != null) {
		//		 this.news = res;
		//	}
		//});
  }

}

export class ExampleDatabase {
	/** Stream that emits whenever the data has been modified. */
	dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
	get data(): UserData[] { return this.dataChange.value; }

	constructor() {
		// Fill up the database with 100 users.
		for (let i = 0; i < 100; i++) { this.addUser(); }
	}

	/** Adds a new user to the database. */
	addUser() {
		const copiedData = this.data.slice();
		copiedData.push(this.createNewUser());
		this.dataChange.next(copiedData);
	}
	private createNewUser() {
		const name =
			NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
			NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

		return {
			id: (this.data.length + 1).toString(),
			name: name,
			progress: Math.round(Math.random() * 100).toString(),
			color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
		};
	}
}

export class ExampleDataSource extends DataSource<any> {
	constructor(private _exampleDatabase: ExampleDatabase) {
		super();
	}

	/** Connect function called by the table to retrieve one stream containing the data to render. */
	connect(): Observable<UserData[]> {
		return this._exampleDatabase.dataChange;
	}

	disconnect() { }
}
