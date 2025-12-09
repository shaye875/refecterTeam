

function addTask(tasks, task) {
    if (typeof task === 'object') {
        tasks.push(task)
    }
}

function delTask(tasks,id){
    for (let t of tasks){
        if (t.id === id){
            tasks.splice(tasks.indexOf(t),1)
        }
    }
}

function find(tasks,name){
    for (let t of tasks){
        if (t.title === name)
            return t
    }
    return false
}

function markAsDone(tasks,id){
    for (let t of tasks){
        if (Number(t.id) === Number(id)){
            t.done = true
            return true
        }
    }
    return false
}

export {addTask,delTask,find,markAsDone}