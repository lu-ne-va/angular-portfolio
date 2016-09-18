'use strict';
import angular from 'angular';
import about from './userInfo';
import more from './userMore';


const deps = [
    about,
	more
];

export default angular.module('portfolio', deps)
    .name;

