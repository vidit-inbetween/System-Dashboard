var React = require('react');
var EventBus = require('../libraries/eventdispatcher/EventDispatcher');
var _ = require('lodash');
var SystemIndividualItemRowView = require('./systemItemIndividualRowView.jsx').view;

var Events = {
};

var systemItemIndividualView = React.createClass({

  propTypes: {
    item: React.PropTypes.object
  },

  getChildNodeDom: function () {
    var oItem = this.props.item;
    var oChildItems = oItem.childNodes;
    var aChildDom = [];
    _.forEach(oChildItems, function (oChildItem) {
      aChildDom.push(
          <SystemIndividualItemRowView item={oChildItem}/>
      )
    });
    return aChildDom;
  },

  render: function () {

    var oItem = this.props.item;
    var aChildNodesDom = this.getChildNodeDom();
    return (
        <div className='systemItemIndividualViewWrapper'>
          <SystemIndividualItemRowView item={oItem}/>
          <div className='childDomNodes hideChildNodes'>
            {aChildNodesDom}
          </div>
        </div>
    );
  }
});

module.exports = {
  view: systemItemIndividualView,
  event: Events
};