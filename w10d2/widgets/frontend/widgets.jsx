import Clock from './clock';
import ReactDOM from 'react-dom';
import React from 'react';



function Root() {
    return <div>
        <Clock />
    </div>;
}
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root/>, document.getElementById('main'));
});
