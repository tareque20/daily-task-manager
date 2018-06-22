import React from 'react';
import {createStore} from 'redux';
import TaskApp from './containers/TaskApp';
import taskApp from './reducers';

const store = createStore(taskApp);

export default class App extends React.Component {
    render() {
        return (
            <TaskApp tasks={store.getState().tasks}/>
        )
    }
}
