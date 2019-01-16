import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TaskItem extends Component {
    // editTask(taskId) {
    //     this.props.handler({
    //         id: taskId,
    //         action: 'edit',
    //     });
    // }
    // deleteTask(taskId) {
    //     this.props.handler({
    //         id: taskId,
    //         action: 'delete',
    //     });
    // }
    render() {
        const task = this.props.task;
        const taskIndex = this.props.taskIndex;
        let taskPath = '/task/'+taskIndex;

        return (
            <tr>
                <td>{task.title}</td>
                <td>
                    <Link to={taskPath}><button className="btn btn-primary btn-sm mr-1">Посмотреть</button></Link>
                    <button className="btn btn-primary btn-sm mr-1" onClick={() => this.editTask(taskIndex)}>Редактировать</button> 
                    <button className="btn btn-danger btn-sm mr-1" onClick={() => this.deleteTask(taskIndex)}>Удалить</button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;