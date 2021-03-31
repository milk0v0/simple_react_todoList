import React, { Component, Fragment } from 'react';

import "./index.css";

import Title from './Title';
import AddTodo from './AddTodo';
import List from './List';
import State from './State';

export default class App extends Component {
    state = {
        data: [{
            id: 1,
            title: "这是第一条todo",
            done: false
        }, {
            id: 2,
            title: "这是第二条todo",
            done: false
        }, {
            id: 3,
            title: "这是第三条todo",
            done: false
        }],
        isEdit: null
    }
    add = newTodo => {
        if (!newTodo.trim()) return;
        const { data } = this.state;
        data.push({
            id: Date.now(),
            title: newTodo,
            done: false
        })
        this.setState({ data });
    }
    changeData = (id, key, val) => {
        const { data } = this.state;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i] = { ...data[i], [key]: val };
                break;
            }
        }
        this.setState({ data });
    }
    remove = id => {
        const { data } = this.state;
        this.setState({
            data: data.filter(item => item.id !== id)
        })
    }
    removeAll = () => {
        const { data } = this.state;
        this.setState({
            data: data.filter(item => !item.done)
        })
    }
    render() {
        const { data } = this.state;
        const noDone = data.filter(item => !item.done).length;
        return (
            <div id="todoapp">
                <Title />
                <div className="content">
                    <AddTodo add={this.add} />
                    {data.length > 0 && <Fragment>
                        <List data={data} changeData={this.changeData} remove={this.remove} />
                        <State noDone={noDone} isDone={data.length - noDone} removeAll={this.removeAll} />
                    </Fragment>}
                </div>
            </div>
        )
    }
}