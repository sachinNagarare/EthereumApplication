'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _campign = require('../ethereum/campign');

var _campign2 = _interopRequireDefault(_campign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sach/Documents/kickstart/components/RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveReqest(_this.props.id).send({

                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('called');
              campaign = (0, _campign2.default)(_this.props.address);
              _context2.next = 4;
              return _web2.default.eth.getAccounts();

            case 4:
              accounts = _context2.sent;
              _context2.next = 7;
              return campaign.methods.finalizeRequest(_this.props.id).send({

                from: accounts[0]
              });

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, this.props.id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, this.props.request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _web2.default.utils.fromWei(this.props.request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, this.props.request.recepient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, this.props.request.approvalCount, '/', this.props.approvarsCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'teal', onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsIm9uRmluYWxpemUiLCJjb25zb2xlIiwibG9nIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjZXBpZW50IiwiYXBwcm92YWxDb3VudCIsImFwcHJvdmFyc0NvdW50IiwiY29tcGxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQU87O0FBQ2hCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBQ1g7Ozs7Ozs7Ozs7Ozs7OztvTixBQUdKLHFGQUFZLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUVSO0FBRlEseUJBRUcsdUJBQVMsTUFBQSxBQUFLLE1BRmpCLEFBRUcsQUFBb0I7OEJBRnZCO3FCQUdTLGNBQUEsQUFBSyxJQUhkLEFBR1MsQUFBUzs7aUJBQTFCO0FBSFEsa0NBQUE7OEJBQUE7OEJBSVIsQUFBUyxRQUFULEFBQWlCLGNBQWMsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLElBQTFDLEFBQThDOztzQkFHM0MsU0FQSyxBQUlSLEFBQ0osQUFFTyxBQUFTO0FBRmhCLEFBRUUsZUFIRTs7aUJBSlE7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QSxlQWFkLEEsc0ZBQWEsb0JBQUE7b0JBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQ1g7c0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDTjtBQUZLLHlCQUVNLHVCQUFTLE1BQUEsQUFBSyxNQUZwQixBQUVNLEFBQW9COytCQUYxQjtxQkFHWSxjQUFBLEFBQUssSUFIakIsQUFHWSxBQUFTOztpQkFBMUI7QUFISyxtQ0FBQTsrQkFBQTs4QkFJTCxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDs7c0JBRzdDLFNBUEUsQUFJTCxBQUNKLEFBRU8sQUFBUztBQUZoQixBQUVFLGVBSEU7O2lCQUpLO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0E7Ozs7OzZCQVlIO1VBQUEsQUFDSCxNQURHLEFBQ1UsdUJBRFYsQUFDSDtVQURHLEFBQ0MsT0FERCxBQUNVLHVCQURWLEFBQ0MsQUFHUDs7NkJBQ0gsY0FBRDs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFRO0FBQVI7QUFBQSxjQUFRLEFBQUssTUFEYixBQUNBLEFBQW1CLEFBQ25CLHFCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQUFMLEFBQVcsUUFGbEIsQUFFQSxBQUEwQixBQUMxQiw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSx1QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBOUIsQUFBc0MsT0FIN0MsQUFHQSxBQUFPLEFBQTRDLEFBQ25ELDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQUFMLEFBQVcsUUFKbEIsQUFJQSxBQUEwQixBQUMxQiw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUFPLEFBQUssTUFBTCxBQUFXLFFBQWxCLEFBQTBCLGVBQWdCLFVBQUEsQUFBSyxNQUwvQyxBQUtBLEFBQXFELEFBQ3JELGlDQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGNBQ0UsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixXQUFuQixBQUE4Qix1QkFDaEMsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQixTQUFRLFNBQVMsS0FBckMsQUFBMEM7b0JBQTFDO3NCQUFBO0FBQUE7T0FBQSxFQVJBLEFBTUEsQUFFQSxBQUlBLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLEFBQUMseUNBQU8sT0FBUixNQUFjLE9BQWQsQUFBb0IsUUFBTyxTQUFTLEtBQXBDLEFBQXlDO29CQUF6QztzQkFBQTtBQUFBO1NBZEksQUFDSixBQVlBLEFBQ0EsQUFLRzs7Ozs7QUFuRHNCLEEsQUFzRHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2FjaC9Eb2N1bWVudHMva2lja3N0YXJ0In0=