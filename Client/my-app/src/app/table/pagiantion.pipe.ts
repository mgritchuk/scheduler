import {Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'pagination',
	pure: false
 })
export class PaginationPipe implements PipeTransform {
	transform(value: any[], page: number, perPage: number, enabled: boolean = true): any[] {
		if (enabled) {
			return value.slice(page * perPage, page * perPage + perPage);
		}
		else {
			return value;
		}
		
	}
}
