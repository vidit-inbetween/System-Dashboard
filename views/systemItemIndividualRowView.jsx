var React = require('react');
var EventBus = require('../libraries/eventdispatcher/EventDispatcher');
var _ = require('lodash');


var Events = {
  HANDLE_COLLAPSE_EXPAND_ICON_CLICKED: "handle_collapse_expand_icon_clicked"
};

var systemItemIndividualRowView = React.createClass({

  propTypes: {
    store: React.PropTypes.object,
    item: React.PropTypes.object
  },

  handleCollapseExpandClick: function (oEvent) {
    var oCollapseIconDom = this.refs.collapseExpandIconRef;
    var aClassList = oCollapseIconDom.classList;
    if (_.includes(aClassList, 'collapseIcon')) {
      oCollapseIconDom.classList.remove('collapseIcon');
      oCollapseIconDom.classList.add('expandIcon');
    } else if (_.includes(aClassList, 'expandIcon')) {
      oCollapseIconDom.classList.remove('expandIcon');
      oCollapseIconDom.classList.add('collapseIcon');
    }
    var oItem = this.props.item;
    var sItemName = oItem.label;
    EventBus.dispatch(Events.HANDLE_COLLAPSE_EXPAND_ICON_CLICKED, this, sItemName);
  },

  render: function () {
    var oItem = this.props.item;
    var sItemName = oItem.label;
    var iId = oItem.id;
    var oStyle = ((iId!=1 && iId!=7 && iId!=8) && (!oItem.childNodes || oItem.childNodes.length < 1)) ? {"border-top":"none"}: null;

    var sPlayClassName = 'playIcon rightIconContainerChild';
    var sRestartClassName = 'restartIcon rightIconContainerChild';
    var sShutDownClassName = 'shutDownIcon rightIconContainerChild';
    if(oItem.id == 7 || oItem.id == 8){
      sPlayClassName += ' visibilityN';
      sRestartClassName += ' visibilityN';
      sShutDownClassName += ' visibilityN';
    }

    return (
        <div className='systemItemIndividualView' style={oStyle}>
          <div className="collapseExpand collapseIcon systemItemIndividualViewChild"
               ref="collapseExpandIconRef"
               onClick={this.handleCollapseExpandClick}></div>
          <div className="labelContainer systemItemIndividualViewChild"
               onClick={this.handleCollapseExpandClick}>{sItemName}</div>
          <div className="rightIconContainer systemItemIndividualViewChild">
            <div className="statusIcon rightIconContainerChild" ></div>
            <div className="thumbUpIcon rightIconContainerChild" ></div>
            <div className={sPlayClassName}></div>
            <div className={sRestartClassName}></div>
            <div className={sShutDownClassName}></div>
            <div className="exitIcon rightIconContainerChild"></div>
          </div>

        </div>
    );
  }
});

module.exports = {
  view: systemItemIndividualRowView,
  events: Events
};