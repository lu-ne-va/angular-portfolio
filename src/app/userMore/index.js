'use strict';
import angular from 'angular';
import more from './more.component';
import db from 'common/db';

const deps = [
	db
];

export default angular.module('portfolio.more', deps)
	.component('more', more)
	.name;

