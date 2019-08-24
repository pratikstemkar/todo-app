// Import React dependencies
import React, { Component } from 'react'

import Header from './Header'
import TodoItem from './TodoItem';

import todosData from './todosData'

// App function to add other components
class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
            handleChange={this.handleChange} />)

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

// Export App to index.js
export default App