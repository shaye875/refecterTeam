import createTask from "./models/task.js";
import printAll from "./utils/logger.js";
import {addTask,delTask,find,markAsDone} from "./services/taskService.js"
import { tasks } from "./data/tasks.js";

let t = createTask(3,"op",undefined,"9")
printAll(tasks)
addTask(tasks,t)
console.log(",");
printAll(tasks)
delTask(tasks,1)
console.log(",");
printAll(tasks)
console.log(find(tasks,"op"));
console.log(",");
console.log(markAsDone(tasks,3)); 
printAll(tasks)
