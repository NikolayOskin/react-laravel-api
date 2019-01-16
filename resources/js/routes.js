import React from 'react';
import {Route} from 'react-router-dom';
import Topmenu from './components/Topmenu.js';
import Tasklist from './components/tasks/Tasklist.js';
import Task from './components/tasks/Task.js';
import AddTask from './components/tasks/AddTask.js';
import Login from './components/auth/Login.js';
import Registration from './components/auth/Registration.js';

export default (
<div>
    <Topmenu/>
    <Route exact path="/" component={Tasklist} />
    <Route path="/login" component={Login} />
    <Route path="/registration" component={Registration} />
    <Route path="/task/:id" component={Task} />
    <Route path="/add" component={AddTask} />
</div>
);