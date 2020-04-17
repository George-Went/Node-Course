
//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
        return tasksToDo = this.tasks.filter((task) => task.completed !== true) 
 
    }
}

console.log(tasks.getTasksToDo())

// 1. console.log is called
// 2. get tasks to do is called
// 3. a array 'tasksToDo' is created
// 4. this array 'filters' through each task, assing the vaiable 'task' 
// to its current task iteration 
// 5. if 'task.completed is false, return true and add to the existing array 
// (This is possible due to the '.this' allowing the function to referance itself 


// Iteration 1
// getTasksToDo(){
//     return tasksToDo = this.tasks.filter((task) => 
//     {
//         return task.completed !== true 
//     })
// return tasksToDo

// Iteration 2 
// getTasksToDo(){
//     return tasksToDo = this.tasks.filter((task) => 
//     {
//         return task.completed !== true 
//     })
// }

