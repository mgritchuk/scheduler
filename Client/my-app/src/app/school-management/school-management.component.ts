import { Component, OnInit } from '@angular/core';
import { SchoolManagementDialog } from './school-management.dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-school-management',
  templateUrl: './school-management.component.html',
  styleUrls: ['./school-management.component.css']
})
export class SchoolManagementComponent extends SchoolManagementDialog {

	constructor(route: ActivatedRoute) {
		super(route);
	}

  

}
