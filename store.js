/**
 * Created by DEV on 23-11-2015.
 */

var uuid = require("./uuid");
var MicroEvent = require("./libraries/microEvent/MicroEvent");
var _ = require('lodash');


var store = {

  aSystemViewList: [
    {
      id: "1",
      label: 'Application Health',
      childNodes: [],
      transaction: {pass: 10, fail: 20, inProgress: 30}
    },
    {
      id: "2",
      label: 'Neo4j Cluster',
      isChildVisible: false,
      childNodes: [{label: 'node1Data'}, {label: 'node2Data'}],
      transaction: {pass: 20, fail: 60, inProgress: 30}
    },
    {
      id: "3",
      label: 'Elastic Cluster',
      isChildVisible: false,
      childNodes: [{label: 'node1Data'}, {label: 'node2Data'}],
      transaction: {pass: 30, fail: 50, inProgress: 30}
    },
    {
      id: "4",
      label: 'Cassandra',
      isChildVisible: false,
      childNodes: [{label: 'node1Data'}, {label: 'node2Data'}],
      transaction: {pass: 40, fail: 40, inProgress: 30}
    },
    {
      id: "5",
      label: 'Tomcat',
      isChildVisible: false,
      childNodes: [{label: 'node1Data'}, {label: 'node2Data'}],
      transaction: {pass: 50, fail: 30, inProgress: 30}
    },
    {
      id: "6",
      label: 'Pentaho',
      isChildVisible: false,
      childNodes: [{label: 'node1Data'}, {label: 'node2Data'}],
      transaction: {pass: 60, fail: 20, inProgress: 30}
    },
    {
      id: "7",
      label: 'Swift',
      isChildVisible: false,
      childNodes: [{label: 'node1Data'}, {label: 'node2Data'}],
      transaction: {pass: 70, fail: 10, inProgress: 30}
    },
    {
      id: "8",
      label: 'Oracle',
      isChildVisible: false,
      childNodes: [{label: 'node1Data'}, {label: 'node2Data'}],
      transaction: {pass: 80, fail: 90, inProgress: 30}
    }
  ],

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

    var oItem = _.find(aData, {Name: sItemName});
    if (oItem) {
      oItem.isChildVisible = !oItem.isChildVisible;
    }
    this.triggerChange();
  },

  handlePieWrapperClicked: function (oPieChartItem) {
    this.sClickedPieChart = oPieChartItem.Name;
    this.triggerChange();
  }

};


MicroEvent.mixin(store);

module.exports = store;