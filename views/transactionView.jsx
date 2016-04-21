var React = require('react');
var _ = require('lodash');
var EventBus = require('../libraries/eventdispatcher/EventDispatcher');
var Pie = require('react-simple-pie-chart');

var oMock = require('../mock/mock');
var MockDataForTiles = require('../mock/mock-data-for-tiles');

var Events = {
  HANDLE_PIE_WRAPPER_CLICKED: "handle_pie_wrapper_clicked"
};


var TransactionView = React.createClass({
  propTypes: {
    data: React.PropTypes.object,
    clickedPieChart: React.PropTypes.string
  },

  getPieChart: function () {
    var aData = this.props.data;

    var oMockColor = oMock.pieChartColor;
    var sPassColor = oMockColor.pass;
    var sFailColor = oMockColor.fail;
    var sInProgressColor = oMockColor.inProgress;
    var aPieDOM = [];
    var that = this;

    _.forEach(aData, function (oCurrentItem) {
      var oTransaction = oCurrentItem.transaction;
      var iPass = oTransaction.pass;
      var iFail = oTransaction.fail;
      var iInProgress = oTransaction.inProgress;

      var aSlice = [
        {
          color: sPassColor,
          value: iPass
        },
        {
          color: sFailColor,
          value: iFail
        },
        {
          color: sInProgressColor,
          value: iInProgress
        }
      ];

      var sItemName = oCurrentItem.Name;
      var sPieContainerClassName = sItemName.replace(' ', '').toLowerCase() + "Pie pieWrapper";
      aPieDOM.push(
          <div className={sPieContainerClassName} onClick={that.handlePieWrapperClicked.bind(that, oCurrentItem)}>
            <Pie slices={aSlice}/>
            <div className="pieChartLabel">{sItemName}</div>
          </div>
      );
    });

    return aPieDOM;
  },

  handlePieWrapperClicked: function (oCurrentItem) {
    EventBus.dispatch(Events.HANDLE_PIE_WRAPPER_CLICKED, this, oCurrentItem);
  },

  getPieInfoContainerDOM: function () {
    var aData = this.props.data;
    var sClickedPie = this.props.clickedPieChart;

    var oCurrentPie = _.find(aData, {label: sClickedPie});

    var oTransaction = oCurrentPie.transaction;
    var iPass = oTransaction.pass;
    var iFail = oTransaction.fail;
    var iInProgress = oTransaction.inProgress;

    var oMockColor = oMock.pieChartColor;
    var oPassStyle = {'background-color': oMockColor.pass};
    var oFailStyle = {'background-color': oMockColor.fail};
    var oInProgressStyle = {'background-color': oMockColor.inProgress};

    return (
          <div className="pieInfoBody">
            <div className="pieInfoBodyLabel">{sClickedPie}</div>
            <div className="passInfo">
              <div className="passColorBlock pieInfoChild" style={oPassStyle} title="Pass"></div>
              <div className="passValue pieInfoChild">{iPass}</div>
            </div>
            <div className="inProgressInfo">
              <div className="inProgressColorBlock pieInfoChild" style={oInProgressStyle} title="InProgress"></div>
              <div className="inProgressValue pieInfoChild">{iInProgress}</div>
            </div>
            <div className="failInfo">
              <div className="failColorBlock pieInfoChild" style={oFailStyle} title="Fail"></div>
              <div className="failValue pieInfoChild">{iFail}</div>
            </div>
          </div>
    );
  },

  getPieChartView: function(oData){

    var oTransactionData = oData.transaction;
    var iPass = oTransactionData.pass;
    var iFail = oTransactionData.fail;
    var iInProgress = oTransactionData.inProgress;
    var oMockColor = oMock.pieChartColor;

    var aSlice = [
      {
        color: oMockColor.pass,
        value: iPass
      },
      {
        color: oMockColor.fail,
        value: iFail
      },
      {
        color: oMockColor.inProgress,
        value: iInProgress
      }
    ];

    var sItemName = oData.label;
    var sPieContainerClassName = sItemName.replace(' ', '').toLowerCase() + "Pie pieWrapper";

    return (
        <div className={sPieContainerClassName} onClick={this.handlePieWrapperClicked.bind(this, oData)}>
          <Pie slices={aSlice}/>
        </div>
    );
  },

  getTileViews: function(){

    var aTiles = MockDataForTiles;
    var aData = this.props.data;
    var _this = this;
    var aTileViews = [];

    _.forEach(aTiles, function(oTile){
      var oData = _.find(aData, {id: oTile.systemId});
      var oPieChartView = oData ?
          <div className="pieChartWrapper">{_this.getPieChartView(oData)}</div> :
          <div className="pieChartInfoWrapper">{_this.getPieInfoContainerDOM()}</div>;
      var sTileClassName = oTile.isBig ? "customTile customBig " : "customTile ";
      sTileClassName += oTile.className;

      aTileViews.push(<div key={oTile.id} className={sTileClassName}>{oPieChartView}</div>);
    });

    return aTileViews;
  },

  render: function () {

    var aTileViews = this.getTileViews();

    return (
        <div className='transactionView'>
          {aTileViews}
        </div>
    )
  }
});

module.exports = {
  view: TransactionView,
  event: Events
};