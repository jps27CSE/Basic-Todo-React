import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        content: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <label>Add Task :</label>
                    <input type="text" onChange={this.onChangeHandler} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo