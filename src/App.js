import React from 'react';
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList"


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: []
        };
    }


    render () {
        return (
            <div>
                <Header />
                <AddTodo
                    handleAddTodo={this.addTodo}
                />
                <TodoList
                    todos={this.state.todos}
                    handleUpdateTodo={this.updateTodo}
                />
            </div>
        )
    }

    componentDidMount = () => {
        const todos = localStorage.getItem('todos');
        if(todos) {
            const savedTodos = JSON.parse(todos);
            this.setState({ todos: savedTodos })
        } else {
            console.log('u have no toods');
        }
    };

    addTodo = async (todo) => {
        await this.setState({ todos: [...this.state.todos, {
            text: todo,
            completed: false
        }]  });
        localStorage.setItem('todos', JSON.stringify((this.state.todos)));
        console.log(localStorage.getItem('todos'));
    }

    updateTodo = async (todo) => {
        const newTodos = this.state.todos.map(_todo => {
            if(todo === _todo)
                return {
                    text: todo.text,
                    completed: !todo.completed
                }
            else
                return _todo
        });
        await this.setState({todos: newTodos});
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
}



export default App;