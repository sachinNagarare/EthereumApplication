'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campign = require('../../../ethereum/campign');

var _campign2 = _interopRequireDefault(_campign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sach/Documents/kickstart/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRow',
    value: function renderRow() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {

        return _react2.default.createElement(_RequestRow2.default, { key: index, id: index, request: request, address: _this2.props.address,
          approvarsCount: _this2.props.approvarsCount, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, ' Request List'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'approvalCount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, this.renderRow())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Found ', this.props.requestCount, ' requests!'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approvarsCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('called');
                address = props.query.address;
                campaign = (0, _campign2.default)(address);
                _context.next = 5;
                return campaign.methods.getRequestCount().call();

              case 5:
                requestCount = _context.sent;

                console.log('request count :: ' + requestCount);
                _context.next = 9;
                return campaign.methods.appoversCount().call();

              case 9:
                approvarsCount = _context.sent;
                _context.next = 12;
                return _promise2.default.all(Array(requestCount).fill().map(function (element, index) {

                  return campaign.methods.requests(index).call();
                }));

              case 12:
                requests = _context.sent;

                console.log(requests);
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approvarsCount: approvarsCount });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92YXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvdyIsInJlcXVlc3RDb3VudCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RDb3VudCIsImNhbGwiLCJhcHBvdmVyc0NvdW50IiwiYWxsIiwiQXJyYXkiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVE7O0FBQ2hCLEFBQVEsQUFBVzs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Z0NBc0JPO21CQUVUOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFRLEFBRTlDOzsrQkFBTyxBQUFDLHNDQUFXLEtBQVosQUFBaUIsT0FBTyxJQUF4QixBQUE0QixPQUFPLFNBQW5DLEFBQTRDLFNBQVMsU0FBUyxPQUFBLEFBQUssTUFBbkUsQUFBeUUsQUFDOUU7MEJBQWdCLE9BQUEsQUFBSyxNQURoQixBQUNzQjtzQkFEdEI7d0JBQVAsQUFBTyxBQUVSO0FBRlE7U0FBQTtBQUZULEFBQU8sQUFLUixPQUxROzs7OzZCQU1EO1VBQUEsQUFHSCxTQUhHLEFBR3lCLHVCQUh6QixBQUdIO1VBSEcsQUFHSSxNQUhKLEFBR3lCLHVCQUh6QixBQUdJO1VBSEosQUFHUSxhQUhSLEFBR3lCLHVCQUh6QixBQUdRO1VBSFIsQUFHbUIsT0FIbkIsQUFHeUIsdUJBSHpCLEFBR21CLEFBRXpCOzs2QkFDSSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFDQSxrQ0FBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUc7QUFBSDtBQUFBLHlCQUFHLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QjtvQkFBeEI7c0JBQUE7QUFBQTtTQUhILEFBRUEsQUFDQSxBQUFHLEFBRUgsa0NBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0MsY0FBRDs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0MsY0FBRDs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0MsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNFLHVCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDRSxnQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FISixBQUdJLEFBQ0UsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSk4sQUFJTSxBQUNFLDhCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxSLEFBS1EsQUFDRSxrQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FOVixBQU1VLEFBQ0UsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBVFosQUFDQSxBQUNBLEFBT1ksQUFHWiwrQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNDO0FBREQ7QUFBQSxjQWpCQSxBQUtBLEFBWUEsQUFDQyxBQUFLLEFBR04sK0JBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVksZUFBQSxBQUFLLE1BQWpCLEFBQXVCLGNBdEIzQixBQUNJLEFBcUJBLEFBSUw7Ozs7OzJHLEFBM0Q0Qjs7Ozs7bUJBQzNCO3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ0w7QSwwQkFBVyxNQUFNLEEsTUFBakIsQUFDRCxBO0EsMkJBQVcsdUJBQUEsQUFBUyxBOzt1QkFDQyxTQUFBLEFBQVMsUUFBVCxBQUFpQixrQkFBakIsQSxBQUFtQzs7bUJBQXhEO0Esd0NBQ047O3dCQUFBLEFBQVEsSUFBSSxzQkFBWixBQUFrQzs7dUJBQ0wsU0FBQSxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLEEsQUFBakM7O21CQUF2QjtBOzt5Q0FFaUIsQUFBUSxVQUNuQyxBQUFNLGNBQU4sQUFBb0IsT0FBcEIsQUFBMkIsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFTLE9BQVEsQUFFOUM7O3lCQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFDekM7QUFKMEIsQUFDM0IsQSxpQkFBQSxDQUQyQjs7bUJBQWpCO0Esb0NBT1Y7O3dCQUFBLEFBQVEsSUFBUixBQUFZO2lEQUNELEVBQUMsU0FBRCxTQUFTLFVBQVQsVUFBa0IsY0FBbEIsY0FBK0IsZ0JBQS9CLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsQmdCLEEsQUFpRTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3NhY2gvRG9jdW1lbnRzL2tpY2tzdGFydCJ9