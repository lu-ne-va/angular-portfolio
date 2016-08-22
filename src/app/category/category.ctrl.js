'use strict';

export default class CategoryController {
	constructor($scope, categoryService, $state) {
		'ngInject';

		this.categories = categoryService.getCategories();
	}
}
