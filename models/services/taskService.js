function addTask(tasks, task) {
    if (typeof task === 'object') {
        tasks.push(task)
    }
}

function delTask(tasks,task){
    for (let t of tasks){
        if (t === task){
            tasks.splice(tasks.indexOf(t),1)
        }
    }
}

function find(tasks,name){
    for (let t of tasks){
        if (String(t.name).toLowerCase() === String(name).toLowerCase())
            return t
    }
    return false
}
