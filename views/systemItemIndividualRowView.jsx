var React = require('react');
var EventBus = require('../libraries/eventdispatcher/EventDispatcher');
var _ = require('lodash');


var Events = {
  HANDLE_COLLAPSE_EXPAND_ICON_CLICKED:"handle_collapse_expand_icon_clicked"
};

var systemItemIndividualRowView = React.createClass({

  propTypes:{
    store:React.PropTypes.object,
    item:React.PropTypes.object
  },

  handleCollapseExpandClick:function (oEvent) {
    var oCollapseIconDom = this.refs.collapseExpandIconRef;
    var aClassList = oCollapseIconDom.classList;
    if(_.includes(aClassList, 'collapseIcon')){
      oCollapseIconDom.classList.remove('collapseIcon');
      oCollapseIconDom.classList.add('expandIcon');
    }else if(_.includes(aClassList, 'expandIcon')){
      oCollapseIconDom.classList.remove('expandIcon');
      oCollapseIconDom.classList.add('collapseIcon');
    }
    var sItemName = this.props.item;
    EventBus.dispatch(Events.HANDLE_COLLAPSE_EXPAND_ICON_CLICKED, this, sItemName);
  },


  render:function() {

    var sItemName = this.props.item;

    return (
        <div className='systemItemIndividualView'>
          <div className="collapseExpand collapseIcon systemItemIndividualViewChild"
               ref="collapseExpandIconRef"
               onClick={this.handleCollapseExpandClick}></div>
          <div className="labelContainer systemItemIndividualViewChild">{sItemName}</div>
          <div className="rightIconContainer systemItemIndividualViewChild">
            <div className="statusIcon rightIconContainerChild" title="Status"></div>
            <div className="thumbUpIcon rightIconContainerChild" title=""></div>
            <div className="playIcon rightIconContainerChild" title="Play"></div>
            <div className="restartIcon rightIconContainerChild" title="Restart"></div>
            <div className="shutDownIcon rightIconContainerChild" title="Shut Down"></div>
            <div className="exitIcon rightIconContainerChild" title="Exit"></div>
          </div>

        </div>
    );
  }
});

module.exports ={
  view : systemItemIndividualRowView,
  events : Events
} ;