import React, { Component } from 'react'

export default class State extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !(nextProps === this.props && nextState === this.state)
    }
    render() {
        const { noDone, isDone, removeAll } = this.props;
        return (
            <div id="todo-stats">
                <span className="todo-count"><span className="number">{noDone}</span><span className="word">项待完成</span></span>
                {isDone && <span className="todo-clear">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a onClick={removeAll}> Clear <span>{isDone}</span> 已完成事项</a>
                </span>}
            </div>
        )
    }
}