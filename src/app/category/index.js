'use strict';
import angular from 'angular';

import todoService from '../app.service'
import categoryService from './category.service';
import CategoryController from './category.ctrl';
import "./category.scss";

export default angular.module("todo.category", [])
    .controller("CategoryController", CategoryController)
	.factory('categoryService', categoryService)
	.factory('todoService', todoService)
    .name;
