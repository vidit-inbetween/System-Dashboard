var eventBus = require('./libraries/eventdispatcher/EventDispatcher');

var Store = require('./store');
var SystemItemIndividualRowViewEvents = require('./views/systemItemIndividualRowView.jsx').events;
var TransactionViewEvents = require('./views/transactionView.jsx').event;

var AppAction = (function () {

  var handlePieWrapperClicked = function (oContext, oPieChartItem) {
    Store.handlePieWrapperClicked(oPieChartItem);
  };

  return {
    registerEvent: function () {
      eventBus.addEventListener(TransactionViewEvents.HANDLE_PIE_WRAPPER_CLICKED, handlePieWrapperClicked);
    },

    deRegisterEvent: function () {
      eventBus.removeEventListener(TransactionViewEvents.HANDLE_PIE_WRAPPER_CLICKED, handlePieWrapperClicked);
    }
  }

})();

module.exports = AppAction;