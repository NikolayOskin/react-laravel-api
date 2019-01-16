import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

const mapStateToProps = function(state){
    console.log(state);
    return {
        isLoggedIn: state.isLoggedIn,
    }
};

const mapDispatchToProps = function (dispatch) {
    return {};
};

class Topmenu extends Component {
    render() {
        //const loggedIn = this.props.isLoggedIn ? 'залогирован' : 'не залогирован';
        console.log(this.props.isLoggedIn);
        const login = this.props.isLoggedIn ? '' :
            <div className="Topmenu__item">
                <Link to="/login">Войти</Link>
            </div>;

        const register = this.props.isLoggedIn ? '' :
            <div className="Topmenu__item">
                <Link to="/registration">Регистрация</Link>
            </div>;

        return (
            <div className="Topmenu">
                <div className="Topmenu__item">
                    <Link to="/">Все таски</Link>
                </div>
                <div className="Topmenu__item">
                    <Link to="/add">Добавить</Link>
                </div>
                {login}
                {register}
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Topmenu);