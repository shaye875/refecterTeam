function createTask(id,title,done = false,owner){
    return {id:id,title:title,done:done,owner:owner}
}

export default createTask