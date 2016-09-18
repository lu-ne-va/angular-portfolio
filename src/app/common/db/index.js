'use strict';
import angular from 'angular';
import userInfo from './user-info.service';


const deps = [

];

export default angular.module('db', deps)
	.factory('userInfo', userInfo)
    .name;

