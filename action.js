var eventBus = require('./libraries/eventdispatcher/EventDispatcher');

var Store = require('./store');
var SystemItemIndividualRowViewEvents = require('./views/systemItemIndividualRowView.jsx').events;
var TransactionViewEvents = require('./views/transactionView.jsx').event;

var AppAction = (function () {

  var handleCollapseExpandIconClicked = function (oContext, sItemName) {
    Store.handleCollapseExpandIconClicked(sItemName);
  };

  var handlePieWrapperClicked = function (oContext, oPieChartItem) {
    Store.handlePieWrapperClicked(oPieChartItem);
  };

  return {
    registerEvent: function () {
      eventBus.addEventListener(SystemItemIndividualRowViewEvents.HANDLE_COLLAPSE_EXPAND_ICON_CLICKED, handleCollapseExpandIconClicked);
      eventBus.addEventListener(TransactionViewEvents.HANDLE_PIE_WRAPPER_CLICKED, handlePieWrapperClicked);
    },

    deRegisterEvent: function () {
      eventBus.removeEventListener(SystemItemIndividualRowViewEvents.HANDLE_COLLAPSE_EXPAND_ICON_CLICKED, handleCollapseExpandIconClicked);
      eventBus.removeEventListener(SearchBarEvent.SEARCH_CONTENT, handleSearchContents);
    }
  }

})();

module.exports = AppAction;