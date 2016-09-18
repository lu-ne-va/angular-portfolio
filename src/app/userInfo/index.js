'use strict';
import angular from 'angular';
import about from './about.component';
import db from 'common/db';
import editField from './editField.directive';

const deps = [
	db
];

export default angular.module('portfolio.about', deps)
	.component('about', about)
	.directive('editField', editField)
	.name;

