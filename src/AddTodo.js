import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        val: ''
    }
    render() {
        const { val } = this.state;
        const { add } = this.props;
        return (
            <div id="create-todo">
                <input
                    id="new-todo"
                    placeholder="What needs to be done?"
                    autoComplete="off"
                    type="text"
                    value={val}
                    onChange={({ target }) => {
                        this.setState({
                            val: target.value
                        })
                    }}
                    onKeyDown={({ keyCode }) => {
                        if (keyCode !== 13 || !val.trim()) return
                        add(val);
                        this.setState({
                            val: ''
                        })
                    }} />
            </div>
        )
    }
}
