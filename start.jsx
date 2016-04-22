var ReactDOM = require('react-dom');
var React = require('react');
var MyController = require('./controller.jsx').view;
var MyStore = require("./store");
var MyAction = require('./action');

MyStore.oshoJSONToMyJSONConverter();

ReactDOM.render(<MyController store={MyStore} action={MyAction}/>, document.querySelector('body'));