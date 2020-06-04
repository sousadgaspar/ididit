import React from "react";

class TodoItem extends React.Component {


    render () {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={props.payload.status} />
                <p>{this.props.payload.task}</p>
            </div>
        );
    }
}

export default TodoItem;