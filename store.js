/**
 * Created by DEV on 23-11-2015.
 */

var uuid = require("./uuid");
var MicroEvent = require("./libraries/microEvent/MicroEvent");
var _ = require('lodash');

var MockDataForDashboard = require('./mock/mock-data-for-dashboard');

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
    this.triggerChange();
  }

};


MicroEvent.mixin(store);

module.exports = store;