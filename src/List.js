import React, { Component } from 'react'

import Todo from './Todo';

export default class List extends Component {
    render() {
        const { data } = this.props;
        return (
            <ul id="todo-list">
                {data.map(item => <Todo {...this.props} data={item} key={item.id} />)}
            </ul>
        )
    }
}
