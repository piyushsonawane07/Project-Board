
 export const sortTask = (task) => {
    let todos=[];
    let doing = [];
    let done = [];

    task.forEach(function(task){
        if(task.status === "todo")
            todos.push(task);
        if(task.status === "doing")
            doing.push(task);
        if(task.status === "done")
            done.push(task);
    });

   return{
       "todo":todos,
        "doing":doing,
        "done":done
   }

}
