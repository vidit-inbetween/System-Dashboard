var React = require('react');
var EventBus = require('../libraries/eventdispatcher/EventDispatcher');
var _ = require('lodash');

var SystemItemIndividualView = require('./systemItemIndividualView.jsx').view;
var MockDataForLeftTableHeader = require('../mock/mock-data-for-left-table-header');
var MockDataForDashBoard = require('../mock/mock-data-for-dashboard');

var Events = {
};

var SystemView = React.createClass({

  propTypes:{
    data:React.PropTypes.object
  },
  
  getInnerSystemView: function () {
    var aSystemItemList = this.props.data;
    var aDOM = [];
    _.forEach(aSystemItemList, function (oSystemItem, iIndex) {

      if(iIndex) {
        aDOM.push(
            <SystemItemIndividualView item={oSystemItem}/>
        );
      }
    });

    return aDOM;
  },

  getHeaderView: function(){

    var aHeaderViews = [];
    var aHeaderList = MockDataForLeftTableHeader;

    _.forEach(aHeaderList, function(oHeader){
      aHeaderViews.push(<div className="headerLabel">{oHeader.label}</div>);
    });

    return (<div className="headerViewContainer">{aHeaderViews}</div>);
  },

  getApplicationHealthView: function(){
    var oApplicationHealthData = _.find(MockDataForDashBoard, {id: "1"});
    var sLabel = oApplicationHealthData.label;
    var sPass = oApplicationHealthData.transaction.pass;
    var sFail = oApplicationHealthData.transaction.fail;
    var sInPrg = oApplicationHealthData.transaction.inProgress;
    var sCPU = oApplicationHealthData.cpu;
    var sMemory = oApplicationHealthData.memory;
    var sDisk = oApplicationHealthData.disk;
    var sPing = oApplicationHealthData.ping;

    return <div className="applicationHealthViewContainer">
      <div className="appHealthHeader">Application Health</div>
      <div className="appHealthBody">
        <div className="appHealthEl pass">{sPass + " passed!"}</div>
        <div className="appHealthEl fail">{sFail + " failed!"}</div>
        <div className="appHealthEl inPrg">{sInPrg + " in-progress!"}</div>
      </div>
    </div>

  },

  render:function() {

    var oInnerSystemView = this.getInnerSystemView();
    var oHeaderView = this.getHeaderView();
    var oApplicationHealthView = this.getApplicationHealthView();

    return (
        <div>
          {oApplicationHealthView}
          <div className='systemView'>
            {oHeaderView}
            {oInnerSystemView}
          </div>
        </div>
    )
  }
});

module.exports ={
  view : SystemView,
  event : Events
};