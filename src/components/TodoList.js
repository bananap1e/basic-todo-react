import React from 'react';
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    render () {

        const { todos } = this.props;

        return (
            <div className='todo-list-container'>
                {
                    todos.map((_todo, _index) => {
                        return (
                            <TodoItem
                                key={_index}
                                todo={_todo}
                                handleUpdateTodo={this.updateTodo}
                            />
                        )
                    })
                }
            </div>
        )
    }

    updateTodo = (todo) => {
        this.props.handleUpdateTodo(todo);
    }

}

export default TodoList;