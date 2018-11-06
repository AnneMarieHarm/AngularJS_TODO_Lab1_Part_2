"use strict";

//Declare function
function TodoController() {
//vm stands for ViewModel
//Declare variable
    const vm = this;
//Declare array
    vm.tasks = [ 
        { task: "Handle physical Inbox", completed: true },
        { task: "Relax", completed: true },
        { task: "Handle regular 'in' and 'out' tasks", completed: true },
        { task: "Shop for groceries, etc.", completed: false },
        { task: "Work on Sunday", completed: true },
    ]
//Add new todo to the array
    vm.addTask = (newTodo) => {
    vm.tasks.push({ task: newTodo, completed: false });
    }
//Remove task from the array
    vm.removeTask = (removeTask) => {
    vm.tasks.splice({ task: removeTask, completed: false });
    }
}
//getter syntax
angular
    .module("todoApp")
    .controller("TodoController", TodoController)

