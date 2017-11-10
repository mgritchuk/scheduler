import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

//import * as moment from 'moment';

//const dateFormats = ['MMM DD, YYYY', 'MMM DD YYYY', 'MM, DD YYYY', 'MM DD YYYY', 'MMM DD, YYYY HH:mm', 'MM DD, YYYY HH:mm'];

export enum SelectionType { none, single, multi }

enum ColumnType { text, date, currency, number, checkbox }

export interface ColumnConfig {
	propName: string;
	header: string;
	handler: (any: any, prop: string) => string;
	position: number;
	type: string;
	show: boolean;
	width: string;
	align: string;
	isInput: boolean;
	inputType: string;
	inputDisabled: boolean;
	validHandler: (params: ValidationParams) => boolean;
}

export interface ValidationParams{
	obj: any;
	value: string;
	prop: string;
}

@Component({
	selector: 'data-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css']
})

export class TableComponent {

	@Input() data: any[];
	@Input() selected: any[];
	@Input() showAllHandler: (any: any) => boolean;
	@Input() set highlightOnly(val: boolean) {
		this._highlightOnly = val;
		this._showAll = val;
	}
	get highlightOnly(): boolean {
		return this._highlightOnly;
	}
	@Input() editIcon: string;
	@Input() deleteIcon: string;
	@Input() altDeleteIcon: string;

	@Input() set enablePagination(value) {
		this._enablePagination = value != null && `${value}` !== 'false';
	}
	get enablePagination(): boolean {
		return this._enablePagination;
	}

	@Input()
	set actionType(type: string) {
		this._actionType = type.split(',');
	}

	@Input()
	set selectionType(type: string) {
		this._selectionType = SelectionType[type];
	}

	@Input()
	set columns(columns: ColumnConfig[]) {
		this._columns = columns
			.sort((a, b) => (a.position === undefined ? Number.MAX_SAFE_INTEGER : a.position) - (b.position === undefined ? Number.MAX_SAFE_INTEGER : b.position))
			.filter(item => item.show || item.show === undefined);
	}
	get columns(): ColumnConfig[] {
		return this._columns;
	}

	@Output() onEdit = new EventEmitter<any>();
	@Output() onDelete = new EventEmitter<any>();
	@Output() dbClick = new EventEmitter<any>();
	@Output() click = new EventEmitter<any>();
	@Output() onSelect = new EventEmitter<any>();
	@Output() onInputChange = new EventEmitter<ValidationParams>();
	@Output() onShowAll = new EventEmitter<boolean>();

	SelectionType = SelectionType;
	patternChanged: Subject<string>;
	inputChanged: Subject<any>;
	_columns: ColumnConfig[];
	_selectionType: SelectionType;
	_showAll: boolean;
	_asc: boolean;
	_sortCol: string;
	_currentPage: number;
	_itemsPerPage: number;
	_itemCount: number;
	_totalPages: number;
	_pattern: string;
	_actionType: string[];
	_highlightOnly: boolean = false;
	_enablePagination: boolean;

	constructor() {
		this.actionType = '';
		this._selectionType = SelectionType.none;
		this.selected = [];
		this._pattern = '';
		this._showAll = false;
		this.enablePagination = true;
		this._asc = true;
		this._currentPage = 0;
		this._itemsPerPage = 10;
		this.patternChanged = new Subject<string>();
		this.inputChanged = new Subject<any>();
	}

	ngOnInit() {
		this.patternChanged.debounceTime(500).distinctUntilChanged().subscribe(result => {
			this._pattern = result;
		});
		this.inputChanged.debounceTime(500).distinctUntilChanged().subscribe(result => {
			let params = result.params as ValidationParams;
			let column = this.columns.find(val => val.propName == params.prop);
			if (!column.validHandler || column.validHandler(params)) {
				params.obj[params.prop] = params.value;
				this.onInputChange.emit(params);
			}
			else {
				let input = result.input as HTMLInputElement;
				input.value = params.obj[params.prop];
			}
		});
	}

	private filterList(list: any[]): any[] {
		if (list) {
			return list.filter(item => {
				return this._showAll || (this.showAllHandler ? this.showAllHandler(item) : true);
			}).filter(item => {
				for (let i = 0; i < this._columns.length; i++) {
					if (this.getDisplayData(item, this._columns[i].propName).toLowerCase().includes(this._pattern.toLowerCase())) {
						return true;
					}
				}
				return false;
			});
		}
		return [];
	}

	filterAllData(): any[] {
		this.selected = this.filterList(this.selected);
		let data = this.filterList(this.data);
		this._itemCount = data.length;
		this._totalPages = Math.floor(this._itemCount / this._itemsPerPage);
		if (this._itemCount % this._itemsPerPage) {
			this._totalPages++;
		}
		//this.sortBy(null);
		//console.log('filter' + new Date().toString());
		return data;
	}

	private getDisplayData(item: any, prop: string): string {
		let column = this._columns.find(value => value.propName == prop);
		let type = this.columns.find(item => prop == item.propName).type;
		return (column.handler ? column.handler(item, prop) : (item[prop] ? item[prop].toString() : type == 'number' ? '0' : ''));
	}

	sortBy(property: string) {
		let oldProperty = this._sortCol;

		if (property) {
			this._sortCol = property;
		}

		this.data.sort(this.sortFunc.bind(this));

		if (oldProperty == this._sortCol) {
			this._asc = !this._asc;
		}

		if (!this._asc) {
			this.data.reverse();
		}
		//console.log(this.data);
	}

	private sortFunc(a, b): number {
		let aData = this.getDisplayData(a, this._sortCol);
		let bData = this.getDisplayData(b, this._sortCol);
		let type = this.columns.find(item => this._sortCol == item.propName).type;
		switch (type) {
			//case 'date':
			//	let a = moment(aData);
			//	let b = moment(bData);
			//	if (!a.isValid() && !b.isValid()) {
			//		a = moment(aData, 'hh:mm');
			//		b = moment(bData, 'hh:mm');
			//	}
			//	return a.valueOf() - b.valueOf();
			//case 'weekDay':
			//	let weekDays = moment.weekdays();
			//	return weekDays.indexOf(aData) - weekDays.indexOf(bData);
			//case 'currency':
			//	aData = aData.replace(/[^.\d]/g, '');
			//	bData = bData.replace(/[^.\d]/g, '');
			case 'number':
				return Number.parseFloat(aData) - Number.parseFloat(bData);
			default:
				return aData.localeCompare(bData);
		}
	}

	private getSortIcon(prop: string): string {
		if (prop != this._sortCol) {
			return 'sort';
		}
		return this._asc ? 'arrow_drop_down' : 'arrow_drop_up';
	}

	validateInput(obj: any, prop: string) {
		
	}

	private selectAll(value: boolean) {
		if (value) {
			this.selected = this.filterList(this.data).slice();
		}
		else {
			this.selected = [];
		}
		this.onSelect.emit(this.selected);
	}

	private selectItem(item: any, event: Event) {
		if (event instanceof Event) {
			event.stopPropagation();
		}
		if (this._selectionType != SelectionType.none) {
			let index = this.selected.findIndex(value => value == item);
			if (index == -1) {
				if (this._selectionType != SelectionType.single || !this.selected.length) {
					this.selected.push(item);
				}
				else {
					this.selected[0] = item;
				}
			}
			else {
				this.selected.splice(index, 1);
			}
			this.onSelect.emit(this.selected);
		}
		else {
			this.click.emit(item);
		}

	}

	private isInSelection(item) {
		let prop = '';
		if (item.hasOwnProperty('id')) {
			prop = 'id';
		}
		if (item.hasOwnProperty('ad')) {
			prop = 'ad';
		}
		return prop ? this.selected.some(value => value[prop] == item[prop]) : this.selected.includes(item);
	}

	private changeItemsPerPage(value: number) {
		this._currentPage = 0;
	}

	private choosePage(page: number) {
		this._currentPage = page;
	}

	private edit(event: Event, item: any) {
		event.stopPropagation();
		this.onEdit.emit(item);
	}

	private delete(event: Event, item: any) {
		event.stopPropagation();
		this.onDelete.emit(item);
	}

	showAllChanged(val: boolean) {
		this.choosePage(0);
		this.onShowAll.emit(val);
	}
}
