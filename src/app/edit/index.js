'use strict';
import angular from 'angular';

import editRouter from './edit.router';
import EditTodoController from './edit.ctrl';
import categoryService from '../category/category.service'
import "./edit.scss";

export default angular.module("todo.edit", [])
    .controller("EditTodoController", EditTodoController)
    .config(editRouter)
	.factory("categoryService", categoryService)
    .name;
