import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.sendCredentials = this.sendCredentials.bind(this);
    }

    sendCredentials(event) {
        event.preventDefault();
        const credentials = {
            username: this.state.username,
            password: this.state.password,
            grant_type: 'password',
            client_id: 2,
            client_secret: 's9X6p3B2Rkc8H1pQBwZhm83iDnM7jMXO64Ju1G7A',
        };
        axios.post('/oauth/token', credentials)
            .then(response => {
                this.props.authenticate(response.data.access_token);
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
    }

    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const redirect = this.props.isLogged ? <Redirect to="/" /> : '';
        return (
            <div>
                <h1>Вход:</h1>
                <form onSubmit={this.sendCredentials}>
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleFieldChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleFieldChange}
                        />
                    </div>
                    <button className="btn btn-primary">Войти</button>
                </form>
                {redirect}
            </div>
        );
    }
}

export default Login;