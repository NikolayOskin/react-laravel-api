import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Task extends Component {   
    render() {
      const {match} = this.props;
      const id = match.params.id;
      const task = this.props.tasks[id];

        return (
          <div className="mt-4">
            <Link to="/"><button className="btn btn-primary">Назад</button></Link>
            <h2 className="mt-2">{task.title}</h2>
            <div>
              {task.description}
            </div>
          </div>  
        );
    }
}

export default Task;