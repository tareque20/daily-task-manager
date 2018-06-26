import React from 'react';
import Filter from './Filter';
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';


export default class TaskApp extends React.Component {
    render() {
        return (
            <div>
                <AddTask />
                <Tasks />
                <Filter />
            </div>
        );
    }
}

