import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { addTask } from "../../actions/taskActions";
import { connect } from 'react-redux';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            newTaskAdded: false
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.addTask = this.addTask.bind(this);
    };
    handleFieldChange (event) {
        this.setState({
                [event.target.name]: event.target.value
            });
    }
    addTask(e) {
        e.preventDefault();
        let task = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.addTask(task);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.task) {
            this.state.newTaskAdded = true;
        }
    }

    render() {
        let redirect = this.state.newTaskAdded ? <Redirect to="/" /> : '';
        return (
            <div>
                <h1>Создать задачу:</h1>
                <form onSubmit={this.addTask}>
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleFieldChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <textarea
                            className="form-control"
                            name="body"
                            id="body" cols="30"
                            rows="10"
                            value={this.state.body}
                            onChange={this.handleFieldChange}
                        >

                        </textarea>
                    </div>
                    <button className="btn btn-primary">Добавить</button>
                </form>
                {redirect}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        task: state.tasks.item
    };
};

export default connect(mapStateToProps, { addTask })(AddTask);