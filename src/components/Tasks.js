import React from "react";
import TodoItem from "./Todo/TodoItem";


let tasks = {
    padding: 0,
    margin: 0,
    listStyleType: "none"
}

let payload = {
    task: "Clean the room",
    status: ""
}

class Tasks {

    render () {
        return (<div className="todo-list">
                    <TodoItem payload={payload} />
                    <TodoItem payload={payload} />
                    <TodoItem payload={payload} />
                    <TodoItem payload={payload} />
                </div>);
    }
}

export default Tasks;