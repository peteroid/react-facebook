'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Facebook = require('./Facebook');

var _FacebookProvider = require('./FacebookProvider');

var _FacebookProvider2 = _interopRequireDefault(_FacebookProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props, context) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props, context));

    _this.state = {};

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.context.facebook.whenReady(function (err, facebook) {
        if (err) {
          _this2.props.onSubmit(err);
          return;
        }

        _this2.setState({ facebook: facebook });

        if (_this2.props.onReady) {
          _this2.props.onReady();
        }
      });
    }
  }, {
    key: 'setWorking',
    value: function setWorking(working) {
      this.setState({ working: working });

      if (this.props.onWorking) {
        this.props.onWorking(working);
      }
    }
  }, {
    key: 'isWorking',
    value: function isWorking() {
      var _state = this.state;
      var working = _state.working;
      var facebook = _state.facebook;


      return working || !facebook;
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _this3 = this;

      var isWorking = this.isWorking();
      if (isWorking) {
        return;
      }

      this.setWorking(true);

      var _props = this.props;
      var scope = _props.scope;
      var fields = _props.fields;
      var onSubmit = _props.onSubmit;
      var returnScopes = _props.returnScopes;
      var rerequest = _props.rerequest;

      var facebook = this.state.facebook;
      var loginQpts = { scope: scope };

      if (returnScopes) {
        loginQpts.return_scopes = true;
      }

      if (rerequest) {
        loginQpts.auth_type = 'rerequest';
      }

      facebook.login(loginQpts, function (err, loginStatus) {
        if (err) {
          _this3.setWorking(false);
          onSubmit(err);
          return;
        }

        if (loginStatus !== _Facebook.LoginStatus.AUTHORIZED) {
          _this3.setWorking(false);
          onSubmit(new Error('Unauthorized user'));
          return;
        }

        facebook.getTokenDetailWithProfile({ fields: fields }, function (err2, data) {
          _this3.setWorking(false);

          if (err2) {
            onSubmit(err2);
            return;
          }

          onSubmit(null, {
            profile: data.profile,
            signedRequest: data.tokenDetail.signedRequest
          });
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var children = _props2.children;


      return _react2.default.createElement(
        'div',
        { className: className, onClick: this.handleClick },
        children
      );
    }
  }]);

  return Login;
}(_react.Component);

Login.propTypes = {
  scope: _react.PropTypes.string.isRequired,
  fields: _react.PropTypes.array.isRequired,
  onSubmit: _react.PropTypes.func.isRequired,
  onReady: _react.PropTypes.func,
  onWorking: _react.PropTypes.func,
  children: _react.PropTypes.node,
  returnScopes: _react.PropTypes.bool,
  rerequest: _react.PropTypes.bool,
  className: _react.PropTypes.string
};
Login.contextTypes = _extends({}, _FacebookProvider2.default.childContextTypes);
Login.defaultProps = {
  scope: '',
  fields: ['id', 'first_name', 'last_name', 'middle_name', 'name', 'locale', 'gender', 'timezone', 'verified', 'link'],
  returnScopes: false,
  rerequest: false,
  className: 'facebook-btn'
};
exports.default = Login;