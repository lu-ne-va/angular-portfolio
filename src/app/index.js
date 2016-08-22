'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router/release/angular-ui-router';

import editPage from './edit';
import category from './category';

import configAppRouter from './app.router';
import ToDoController from './app.ctrl'
import todoService from './app.service'

const deps = [
    uiRouter,
    editPage,
    category
];

export default angular.module("todo", deps)
    .config(configAppRouter)
    .controller("ToDoController", ToDoController)
    .factory("todoService", todoService)
    .name;

