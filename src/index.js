import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import TaskApp from './containers/TaskApp';
import taskApp from './reducers';

const store = createStore(taskApp);

const render = () => {
    console.log(store.getState());
    ReactDOM.render(
        <TaskApp store={store} />,
        document.getElementById('root')
    )
};

store.subscribe(render);

render();