import React from 'react';
import "../assets/css/TodoItem.css"

class TodoItem extends React.Component {

    render () {

        const { todo } = this.props;

        return (
            <div
                className={'todoItem' + (todo.completed ? ' completed' : '')}
                onClick={this.toggleTodo}
            >
                {todo.text}
            </div>
        )
    }

    toggleTodo = () => {
        this.props.handleUpdateTodo(this.props.todo)
    }
}

export default TodoItem;