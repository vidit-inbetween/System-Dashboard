var React = require('react');
var EventBus = require('../libraries/eventdispatcher/EventDispatcher');
var _ = require('lodash');

var SystemItemIndividualView = require('./systemItemIndividualView.jsx').view;
var MockDataForLeftTableHeader = require('../mock/mock-data-for-left-table-header');

var Events = {
};

var SystemView = React.createClass({

  propTypes:{
    data:React.PropTypes.object,
  },
  
  getInnerSystemView: function () {
    var aSystemItemList = this.props.data;
    var aDOM = [];
    _.forEach(aSystemItemList, function (oSystemItem, iIndex) {
      aDOM.push(
          <SystemItemIndividualView item={oSystemItem}/>
      );
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

  render:function() {

    var oInnerSystemView = this.getInnerSystemView();
    var oHeaderView = this.getHeaderView();

    return (
        <div className='systemView'>
          {oHeaderView}
          {oInnerSystemView}
        </div>
    )
  }
});

module.exports ={
  view : SystemView,
  event : Events
} ;