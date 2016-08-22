'use strict';
import angular from 'angular';

import categoryService from './category.service';
import CategoryController from './category.ctrl';
import "./category.scss";

export default angular.module("todo.category", [])
    .controller("CategoryController", CategoryController)
	.factory('categoryService', categoryService)
    .name;
