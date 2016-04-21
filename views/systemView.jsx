var React = require('react');
var EventBus = require('../libraries/eventdispatcher/EventDispatcher');
var _ = require('lodash');

var SystemItemIndividualView = require('./systemItemIndividualView.jsx').view;
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

  render:function() {

    var oInnerSystemView = this.getInnerSystemView();
    return (
        <div className='systemView'>
          {oInnerSystemView}
        </div>
    )
  }
});

module.exports ={
  view : SystemView,
  event : Events
} ;