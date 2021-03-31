import React, { Component, createRef } from 'react'

export default class Todo extends Component {
    state = {
        val: this.props.data.title,
        isEdit: false
    }
    editText = createRef();
    // componentDidMount() {
    //     console.log(this.editText.current);
    // }
    componentDidUpdate(PrevProps, PrevState) {
        if (!PrevState.isEdit && this.state.isEdit) {
            this.editText.current.focus();
        }
    }
    render() {
        const { data, changeData, remove } = this.props;
        const { id, title, done } = data;
        const { val, isEdit } = this.state;
        return (
            <li className={isEdit ? "editing" : ""}>
                <div className={"todo" + (done ? " done" : "")}>
                    <div className="display" onDoubleClick={() => {
                        this.setState({
                            isEdit: true
                        });
                    }}>
                        <input className="check" type="checkbox" checked={done} onChange={({ target }) => {
                            changeData(id, 'done', target.checked)
                        }} />
                        <div className="todo-content">{title}</div>
                        <span className="todo-destroy" onClick={() => {
                            remove(id);
                        }}></span>
                    </div>
                    <div className="edit">
                        <input ref={this.editText} className="todo-input" type="text" value={val} onChange={({ target }) => {
                            this.setState({
                                val: target.value
                            })
                        }} onKeyDown={({ keyCode }) => {
                            if (keyCode === 13) {
                                this.setState({
                                    isEdit: false
                                })
                                if (!val.trim()) {
                                    return this.setState({ val: title })
                                }
                                changeData(id, 'title', val);
                            }
                        }} onBlur={() => {
                            this.setState({
                                isEdit: false,
                                val: title
                            });
                        }} />
                    </div>
                </div>
            </li>
        )
    }
}