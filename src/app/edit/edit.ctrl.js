'use strict';

export default function EditTodoController($scope, todoService, categoryService, $state) {
    'ngInject';

    $scope.categories = categoryService.getCategories();

    $scope.newTodo = {
        name: '',
        deadline: '',
        category: '',
        isDone: false
    };

    $scope.addTodo = function () {
        todoService.tasks.push($scope.newTodo);

        $scope.newTodo = {
            name: '',
            deadline: '',
			category: '',
            isDone: false
        };

        $state.go('tasks.list');
    };
}
