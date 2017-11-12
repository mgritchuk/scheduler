import { Component, OnInit } from '@angular/core';
import { SchoolManagementDialog } from './school-management.dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-school-management',
  templateUrl: './school-management.component.html',
  styleUrls: ['./school-management.component.css']
})
export class SchoolManagementComponent extends SchoolManagementDialog {

	constructor(route: ActivatedRoute, service: SchoolService, router: Router) {
		super(route, service, router, null);
	}

  

}
