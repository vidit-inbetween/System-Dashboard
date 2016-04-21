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
      var sItemName = oChildItem.label;
      aChildDom.push(
          <SystemIndividualItemRowView item={sItemName}/>
      )
    });
    return aChildDom;
  },

  render: function () {

    var oItem = this.props.item;
    var sItemName = oItem.label;
    var aChildNodesDom = this.getChildNodeDom();
    var sChildNodeClassName = (oItem.isChildVisible) ? 'childDomNodes' : 'dispN';
    return (
        <div className='systemItemIndividualView'>
          <SystemIndividualItemRowView item={sItemName}/>
          <div className={sChildNodeClassName}>
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