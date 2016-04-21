var React = require("react");
var EventBus = require('./libraries/eventdispatcher/EventDispatcher');

var _ = require('lodash');

var SystemView = require('./views/systemView.jsx').view;
var TransactionView = require('./views/transactionView.jsx').view;


var Events = {};

var ApplicationController = React.createClass({
  propTypes: {
    store: React.PropTypes.object
  },


  componentWillMount: function () {
    this.setState({
      data: this.getStore().initialize().data,
      clickedPieChart: this.getStore().initialize().clickedPieChart
    });
  },

  /*getInitialState: function(){
   //return this.props.data;
   return (
   {
   data: []
   }
   );
   },*/

  getStore: function () {
    return this.props.store;
  },

  //@UnBind: store with state
  componentWillUnmount: function () {
    this.getStore().unbind('change', this.stateChanged);
    this.props.action.deRegisterEvent();
  },

  //@Bind: Store with state
  componentDidMount: function () {
    this.getStore().bind('change', this.stateChanged);
    this.props.action.registerEvent();
  },

  stateChanged: function () {
    this.setState({
      data: this.getStore().getSystemItemList(),
      clickedPieChart: this.getStore().getClickedPieChart()
    });
  },


  render: function () {

    var aData = this.state.data;

    return (
        <div className="wrapperMain">
          <div className="dashboardHeader">
            <div className="dashboardTitle">Monitoring Dashboard</div>
          </div>
          <div className="dashboardBody">
            <div className="dashboardBodyContainer">
              <div className="systemViewContainer">
                <div className="systemLabel">System</div>
                <SystemView data={aData}/>
              </div>
              <div className="transactionViewContainer">
                <div className="transactionLabel">Transaction</div>
                <TransactionView data={aData} clickedPieChart={this.state.clickedPieChart}/>
              </div>
            </div>
          </div>
        </div>);
  }
});

module.exports = {
  view: ApplicationController,
  events: Events
};

//<TransactionView />

