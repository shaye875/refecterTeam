function printAll(tasxs){
    tasxs.forEach((t)=>{
        console.log(`id: ${t.id} title: ${t.title} done: ${t.done} owner: ${t.ower}`);
    })
}

export default printAll