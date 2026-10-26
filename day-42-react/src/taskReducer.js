export function taskReducer(state,action){
    switch(action.type){
        case "ADD TASK":
            return [
                ...state,
                {
                    id:Date.now(),
                    text:action.payload,
                    completed:false
                }
            ]
        case "TOGGLE TASK":
            return state.map(function(task){
                task.id===action.payload
            })
    }
}