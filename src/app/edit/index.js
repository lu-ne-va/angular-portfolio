'use strict';
import angular from 'angular';

import editRouter from './edit.router';
import EditTodoController from './edit.ctrl';
import "./edit.scss";

export default angular.module("todo.edit", [])
    .controller("EditTodoController", EditTodoController)
    .config(editRouter)
    .name;
