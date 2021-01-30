import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    window.store = configureStore; // set window store prop to default store;
    ReactDOM.render(<h1>Todo App</h1>, document.getElementById("content"));
})
