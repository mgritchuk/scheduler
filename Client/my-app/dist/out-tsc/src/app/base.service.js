"use strict";
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
var environment_1 = require("environments/environment");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var BaseService = (function () {
    function BaseService(http) {
        this.http = http;
        this.apiUrl = environment_1.environment.apiUrl;
    }
    BaseService.prototype.GetNews = function () {
        return this.http.get(this.apiUrl + "api/NewsItems/GetNewsItemsPublic")
            .map(function (response) { return response.json(); });
    };
    BaseService.prototype.Test = function () {
        return this.http.get(this.apiUrl + "api/values")
            .map(function (response) { return response.json(); });
    };
    return BaseService;
}());
BaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map