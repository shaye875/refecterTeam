function addTask(tasks, task) {
    if (typeof task === 'object') {
        tasks.push(task)
    }
}