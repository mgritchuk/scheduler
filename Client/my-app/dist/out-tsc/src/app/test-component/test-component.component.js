"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_service_1 = require("../base.service");
var collections_1 = require("@angular/cdk/collections");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/startWith");
require("rxjs/add/observable/merge");
require("rxjs/add/operator/map");
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
var TestComponentComponent = (function () {
    function TestComponentComponent(baseService) {
        this.baseService = baseService;
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase();
        this.news = [];
    }
    TestComponentComponent.prototype.onClick = function (name) {
        console.log(name);
    };
    TestComponentComponent.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
        //this.baseService.Test().subscribe(res => {
        //	if (res != null) {
        //		 this.news = res;
        //	}
        //});
    };
    return TestComponentComponent;
}());
TestComponentComponent = __decorate([
    core_1.Component({
        selector: 'app-test-component',
        templateUrl: './test-component.component.html',
        styleUrls: ['./test-component.component.css']
    }),
    __metadata("design:paramtypes", [base_service_1.BaseService])
], TestComponentComponent);
exports.TestComponentComponent = TestComponentComponent;
var ExampleDatabase = (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new BehaviorSubject_1.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());
exports.ExampleDatabase = ExampleDatabase;
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return this._exampleDatabase.dataChange;
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(collections_1.DataSource));
exports.ExampleDataSource = ExampleDataSource;
//# sourceMappingURL=test-component.component.js.map