import React from 'react';

class AddTodo extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ''
        };
    };

    updateInput = (e) => {
        this.setState({ todo: e.target.value })
    };

    submitTodo = (e) => {
        e.preventDefault();
        this.props.handleAddTodo(this.state.todo);
        document.getElementById('addTodoInput').value = '';
    };

    render () {
        return (
            <div className='add-todo-container'>
                <form onSubmit={(e) => this.submitTodo(e)}>
                    <input
                        id='addTodoInput'
                        onChange={(e) => this.updateInput(e)}
                        type="text"
                    />
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;