'use strict';

export default class ToDoController {

    constructor($scope, todoService) {
        'ngInject';

        $scope.todos = todoService;

        $scope.clearCompleted = function () {
            $scope.todos = $scope.todos.filter(function (item) {
                return !item.isDone;
            })
        }
    }
}
