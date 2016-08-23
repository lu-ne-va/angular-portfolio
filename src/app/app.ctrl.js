'use strict';

export default class ToDoController {

    constructor($scope, todoService, categoryService, $state, $stateParams) {
        'ngInject';
        let todosChanged = todoService.getAllTasks();
        let categories = categoryService.getCategories();


		for (let item in todosChanged) {
			let that = todosChanged[item];
			let categoryId = todosChanged[item].category;
			let categoryName = '';

			for (let item in categories) {
				if (categories[item].id ==  categoryId) {
					categoryName = categories[item].name;
				}
			}
			that.categoryName = categoryName;
		}

		if($state.current.name == 'list') {
			let id = $stateParams["id"];
			$scope.todos = todoService.getByCategoryId(id);
			console.log(id);

		} else {
			$scope.todos = todosChanged;
		}



		$scope.clearCompleted = function () {
            $scope.todos = $scope.todos.filter(function (item) {
                return !item.isDone;
            })
        }
    }
}
