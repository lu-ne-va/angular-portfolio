'use strict';

export default function editRouter($stateProvider) {
    $stateProvider
        .state('add-new', {
            url: '/add-new',
            views: {
                'category': {
                    template: require('../category/category.html'),
                    controller: 'CategoryController',
                    controllerAs: '$ctrl'
                },
                'content': {
                    template: require('./edit.html'),
                    controller: 'EditTodoController',
                    controllerAs: '$ctrl'
                }
            }
        })
}
