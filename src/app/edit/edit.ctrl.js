'use strict';

export default function EditTodoController($scope, todoService, $state) {
    'ngInject';

    $scope.newTodo = {
        name: '',
        deadline: '',
        isDone: false
    };

    $scope.addTodo = function () {
        todoService.push($scope.newTodo);

        $scope.newTodo = {
            name: '',
            deadline: '',
            isDone: false
        };

        $state.go('home');
    };
}
