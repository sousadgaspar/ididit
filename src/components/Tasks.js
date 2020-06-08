import React, {Component} from "react";
import TodoItem from "./Todo/TodoItem";

class Tasks extends Component {

    constructor () {
        super();

        this.state = {
            task: "Clean the room",
            status: ""
        }
    }

    render () {

        let tasks = {
            padding: 0,
            margin: 0,
            listStyleType: "none"
        }
        
        
        return (<div className="todo-list">
                    <TodoItem payload={this.state.task} />
                    <TodoItem payload={this.state.task} />
                    <TodoItem payload={this.state.task} />
                    <TodoItem payload={this.state.task} />
                </div>);
    }
}

export default Tasks;