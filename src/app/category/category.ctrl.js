'use strict';

export default class CategoryController {
	constructor($scope, categoryService, todoService, $state) {
		'ngInject';

		this.state = $state;

		this.todos = todoService.getAllTasks();
		this.tasksAtAll = this.todos.length;

		this.categories = categoryService.getCategories();

		for (let item in this.categories) {
			let that = this.categories[item];
			let categoryId = this.categories[item].id;
			let count = 0;

			for (let todo in this.todos) {
				if (this.todos[todo].category ==  categoryId) {
					count++ ;
				}
			}
			that.count = count;
		}
	}
}
