'use strict';

export default function configAppRouter($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('tasks', {
			url: '',
			abstract: true,
			views: {
				'category': {
					template: require('./category/category.html'),
					controller: 'CategoryController',
					controllerAs: '$ctrl'
				},
				'content': {
					template: '<div ui-view="content"></div>'
				}
			}
		})
		.state('tasks.all', {
			url: '/',
			views: {
				'content': {
					template: require('./app.html'),
					controller: 'ToDoController',
					controllerAs: '$ctrl'
				}
			},
			resolve: {
				tasks(todoService) {
					return todoService.getAllTasks();
				}

			}
		})
		.state('tasks.list', {
			url: '/list/:id',
			views: {
				'content': {
					template: require('./app.html'),
					controller: 'ToDoController',
					controllerAs: '$ctrl'
				}
			},
			resolve: {
				tasks($stateParams, todoService) {
					return todoService.getByCategoryId($stateParams.id);

				}

			}
		})
}
