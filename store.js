/**
 * Created by DEV on 23-11-2015.
 */

var MicroEvent = require("./libraries/microEvent/MicroEvent");
var _ = require('lodash');

var MockDataForDashboard = require('./mock/mock-data-for-dashboard');
var MockDataForTiles = require('./mock/mock-data-for-tiles');
var MockPerformanceData = require('./mock/performanceData');

var store = {

  aSystemViewList: MockDataForDashboard,

  sClickedPieChart: "Application Health",

  triggerChange: function () {
    return store.trigger('change');
  },

  initialize: function () {
    return {
      data: this.aSystemViewList,
      clickedPieChart: this.sClickedPieChart
    };
  },

  getSystemItemList: function () {
    return this.aSystemViewList;
  },

  getClickedPieChart: function () {
    return this.sClickedPieChart;
  },

  handleCollapseExpandIconClicked: function (sItemName) {
    var aData = this.aSystemViewList;

    var oItem = _.find(aData, {label: sItemName});
    if (oItem) {
      oItem.isChildVisible = !oItem.isChildVisible;
    }
    this.triggerChange();
  },

  handlePieWrapperClicked: function (oPieChartItem) {
    this.sClickedPieChart = oPieChartItem.label;
    var iIdSelected = oPieChartItem.id;
    _.forEach(MockDataForTiles, function (oTileItem) {
      oTileItem.isSelectedTile = (oTileItem.id == iIdSelected);
    });

    this.triggerChange();
  },

  updateTransactionData: function (sStatus, oTransaction) {
    var sLowerStatus = sStatus.toLowerCase();
    if( sLowerStatus == 'success'){
      oTransaction.pass++;
    }else if(sLowerStatus == 'failure'){
      oTransaction.fail++;
    }else if(sLowerStatus == 'inprogress'){
      oTransaction.inProgress++;
    }
  },

  oshoJSONToMyJSONConverter: function () {

    var aOperationalHitsData = MockPerformanceData.hits.hits;

    var oApplicationHealthTransaction = {
      pass:0,
      fail:0,
      inProgress:0
    };

    var oElasticTransaction = {
      pass:0,
      fail:0,
      inProgress:0
    };

    var oNeo4jTransaction = {
      pass:0,
      fail:0,
      inProgress:0
    };

    var oAssetTransaction = {
      pass:0,
      fail:0,
      inProgress:0
    };

    var _this = this;
    _.forEach(aOperationalHitsData, function (oHit, iIndex) {
      var sAppHealthStatus = oHit['_source'].executionStatus;
      _this.updateTransactionData(sAppHealthStatus, oApplicationHealthTransaction);

      var oInteractor = oHit['_source'].interactor;
      if(oInteractor.elasticStrategy){
        var sElasticStatus = oInteractor.elasticStrategy.executionStatus;
        _this.updateTransactionData(sElasticStatus, oElasticTransaction);
      }

      if(oInteractor.neo4jStrategy){
        var sNeo4jStatus = oInteractor.neo4jStrategy.executionStatus;
        _this.updateTransactionData(sNeo4jStatus, oNeo4jTransaction);
      }

      if(oInteractor.assetStrategy){
        var sAssetStatus = oInteractor.assetStrategy.executionStatus;
        _this.updateTransactionData(sAssetStatus, oAssetTransaction);
      }
    });

    var aDashboardData = this.aSystemViewList;
    _.forEach(aDashboardData, function (oDashboardItem, iIndexDashboard) {
      if(oDashboardItem.id == 1){// Application Health
        oDashboardItem.transaction = oApplicationHealthTransaction;
      }else if(oDashboardItem.id == 2){ // Neo4j Cluster
        oDashboardItem.transaction = oNeo4jTransaction;
      }else if(oDashboardItem.id == 3){ // Elastic Cluster
        oDashboardItem.transaction = oElasticTransaction;
      }else if(oDashboardItem.id == 7){ // Asset === Swift
        oDashboardItem.transaction = oAssetTransaction;
      }
    });

  }



};


MicroEvent.mixin(store);

module.exports = store;