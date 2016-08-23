'use strict';

export default function todoService() {
    const tasks = [
        {
            name: "Start to create  a todo-app",
            deadline: "25/08",
            category: "1",
            isDone: true
        },
        {
            name: "Create a todo-app",
            deadline: "25/09",
            category: "1",
            isDone: false
        },
        {
            name: "Trek to the moon",
            deadline: "25/09",
            category: "4",
            isDone: false
        },
        {
            name: "Save the whales",
            deadline: "25/09",
            category: "4",
            isDone: false
        },
        {
            name: "Find cat",
            deadline: "25/09",
            category: "4",
            isDone: false
        }
    ];

	return  {
		getByCategoryId(id) {
			let filtredTasks = tasks.filter(function (item) {
				return item.category == id;
			});
			return filtredTasks;
		},
		getAllTasks() {
			return tasks;
		},
		tasks: tasks
	};
}
