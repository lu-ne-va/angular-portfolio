'use strict';

export default function todoService() {
    const tasks = [
        {
            name: "Start to create  a todo-app",
            deadline: "25/08",
            isDone: true
        },
        {
            name: "Create a todo-app",
            deadline: "25/09",
            isDone: false
        }
    ];

    return tasks;
}
