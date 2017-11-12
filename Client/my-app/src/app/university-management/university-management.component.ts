import { Component, OnInit, Input } from '@angular/core';
import { University } from "../Models/University";
import { UniversityManagementDialog } from './university-management.dialog';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ZNOService } from '../services/zno.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-university-management',
  templateUrl: './university-management.component.html',
  styleUrls: ['./university-management.component.css']
})

export class UniversityManagementComponent extends UniversityManagementDialog {

	//@Input() universities: University[] = [];

	constructor(znoService: ZNOService, route: ActivatedRoute) {
		super(znoService, route);
	}


}
