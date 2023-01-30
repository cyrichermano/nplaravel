import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if (document.getElementById('cyric')) {
    ReactDOM.render(<App />, document.getElementById('cyric'));
}