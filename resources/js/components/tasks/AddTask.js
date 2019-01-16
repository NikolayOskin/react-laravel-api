import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { addTask } from "../../actions/taskActions";
import { connect } from 'react-redux';

class AddTask extends Component {
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        let redirect = this.state.added ? <Redirect to="/" /> : '';
        return (
            <div>
                <h1>Создать задачу:</h1>
                <form onSubmit={this.addTask}>
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            value=""
                            onChange={this.handleFieldChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <textarea
                            className="form-control"
                            name="body"
                            id="body" cols="30"
                            rows="10"
                            value=""
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

export default connect(null, null)(AddTask);