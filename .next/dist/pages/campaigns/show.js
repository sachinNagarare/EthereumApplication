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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campign = require('../../ethereum/campign');

var _campign2 = _interopRequireDefault(_campign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sach/Documents/kickstart/pages/campaigns/show.js?entry';


var CampaingShow = function (_Component) {
  (0, _inherits3.default)(CampaingShow, _Component);

  function CampaingShow() {
    (0, _classCallCheck3.default)(this, CampaingShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaingShow.__proto__ || (0, _getPrototypeOf2.default)(CampaingShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaingShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: 'add of manager',
        description: 'manager wants to send money',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'minimumContribution for this contract',
        description: 'you need this much money to be a part of this Campign',
        style: { overflowWrap: 'break-word' }
      }, {
        header: requestsCount,
        meta: 'number of requests',
        description: 'A request tries to  widraw moeny from the contract.Request must be approved by approvers',
        style: { overflowWrap: 'break-word' }
      }, {
        header: approversCount,
        meta: 'number of approvers',
        description: 'number of people who already contributed to this request',
        style: { overflowWrap: 'break-word' }
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'add of manager',
        description: 'manager wants to send money',
        style: { overflowWrap: 'break-word' }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, ' show camp'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'View Requests')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
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

  return CampaingShow;
}(_react.Component);

exports.default = CampaingShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaW5nU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFRLEFBQU0sQUFBTTs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUSxBQUFXOzs7Ozs7O0lBQ2IsQTs7Ozs7Ozs7Ozs7a0NBZ0JPO21CQUM4RCxLQUQ5RCxBQUNtRTtVQURuRSxBQUNOLGlCQURNLEFBQ047VUFETSxBQUNFLGlCQURGLEFBQ0U7VUFERixBQUNVLDZCQURWLEFBQ1U7VUFEVixBQUM4Qix1QkFEOUIsQUFDOEI7VUFEOUIsQUFDNEMsd0JBRDVDLEFBQzRDLEFBQ3ZEOztVQUFNO2dCQUNSLEFBQ1MsQUFDUDtjQUZGLEFBRU8sQUFDTDtxQkFIRixBQUdlLEFBQ2I7ZUFBTSxFQUFDLGNBTE8sQUFDaEIsQUFJUSxBQUFnQjtBQUp4QixBQUNFLE9BRmM7Z0JBT2hCLEFBQ1MsQUFDUDtjQUZGLEFBRU8sQUFDTDtxQkFIRixBQUdlLEFBQ2I7ZUFBTSxFQUFDLGNBWE8sQUFPaEIsQUFJUSxBQUFnQjtBQUp4QixBQUNFO2dCQU1GLEFBQ1MsQUFDUDtjQUZGLEFBRU8sQUFDTDtxQkFIRixBQUdlLEFBQ2I7ZUFBTSxFQUFDLGNBbEJPLEFBY2hCLEFBSVEsQUFBZ0I7QUFKeEIsQUFDRTtnQkFLRixBQUNTLEFBQ1A7Y0FGRixBQUVPLEFBQ0w7cUJBSEYsQUFHZSxBQUNiO2VBQU0sRUFBQyxjQXhCTyxBQW9CaEIsQUFJUSxBQUFnQjtBQUp4QixBQUNFO2dCQU9PLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ1QixBQUNTLEFBQTJCLEFBQ2xDO2NBRkYsQUFFTyxBQUNMO3FCQUhGLEFBR2UsQUFDYjtlQUFNLEVBQUMsY0EvQlAsQUFBYyxBQTJCaEIsQUFJUSxBQUFnQixBQUt0QjtBQVRGLEFBQ0U7OzJDQVFPLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0QsQUFDTjs2QkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNDO0FBREQ7QUFBQSxPQUFBLGtCQUNDLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURELEFBQ0MsQUFDQSwrQkFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0k7QUFESjtjQURBLEFBQ0EsQUFDSSxBQUFLLEFBSVQsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQVJGLEFBQ0EsQUFNQSxBQUNFLEFBR0E7QUFIQTs0QkFHQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQWxCSCxBQUNBLEFBRUMsQUFXRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBVUo7Ozs7OzJHQXBGOEIsQTs7Ozs7bUJBQ3pCO0EsMkJBQVcsdUJBQVEsTUFBQSxBQUFNLE0sQUFBZCxBQUFvQjs7dUJBQ2YsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7bUJBQTlDO0E7OzJCQUdJLE1BQUEsQUFBTSxNQURULEFBQ2UsQUFDcEI7dUNBQXNCLFFBRmpCLEFBRWlCLEFBQVEsQUFDOUI7MkJBQVUsUUFITCxBQUdLLEFBQVEsQUFDbEI7aUNBQWdCLFFBSlgsQUFJVyxBQUFRLEFBQ3hCO2tDQUFpQixRQUxaLEFBS1ksQUFBUSxBQUN6QjsyQkFBVSxRQU5MLEFBTUssQUFBUSxBO0FBTmIsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVB5QixBLEFBeUYzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3NhY2gvRG9jdW1lbnRzL2tpY2tzdGFydCJ9