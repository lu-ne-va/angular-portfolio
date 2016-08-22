'use strict';

export default function editRouter($stateProvider) {
    $stateProvider
        .state('add-new', {
            url: '/add-new',
            template: require('./edit.html'),
            controller: 'EditTodoController'
        })
}
