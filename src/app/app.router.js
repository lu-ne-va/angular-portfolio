'use strict';

export default function configAppRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
            	'category': {
					template: require('./category/category.html'),
					controller: 'CategoryController',
					controllerAs: '$ctrl'
				},
            	'content': {
					template: require('./app.html'),
					controller: 'ToDoController',
					controllerAs: '$ctrl'
				}
			}
        })
}
