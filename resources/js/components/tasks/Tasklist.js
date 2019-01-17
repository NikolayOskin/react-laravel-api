import React, { Component } from 'react';
import TaskItem from './TaskItem.js';
import { connect } from 'react-redux';
import { getAllTasks } from "../../actions/taskActions";

class Tasklist extends Component {
    componentWillMount() {
        this.props.getAllTasks();
    }

    componentDidMount() {
        let tasks = this.props.tasks;
        //console.log(tasks);
    }
    // Set default props
    // static defaultProps = {
    //     tasks: [],
    // };

    render() {
        let tasks = [];
        tasks = this.props.tasks;
        //console.log(tasks[0]);
        //console.log(typeof tasks[0]);
        let tasklist = tasks.map((task, index) => {
            return(
                <TaskItem key={index} task={task} taskIndex={index} />
                );
            });

        return (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Задача</th>
                  <th scope="col">Действие</th>
                </tr>
              </thead>
              <tbody>
              {tasklist}
              </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.items
    };
};

export default connect(mapStateToProps, { getAllTasks })(Tasklist);