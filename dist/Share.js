'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _FacebookProvider = require('./FacebookProvider');

var _FacebookProvider2 = _interopRequireDefault(_FacebookProvider);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = function (_Component) {
  _inherits(Share, _Component);

  function Share(props, context) {
    _classCallCheck(this, Share);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Share).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Share, [{
    key: 'getSharerHref',
    value: function getSharerHref() {
      var facebook = this.context.facebook;
      var _props = this.props;
      var _props$href = _props.href;
      var href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href;
      var display = _props.display;
      var _props$appId = _props.appId;
      var appId = _props$appId === undefined ? facebook.props.appID : _props$appId;
      var hashtag = _props.hashtag;
      var redirectURI = _props.redirectURI;
      var quote = _props.quote;
      var mobileIframe = _props.mobileIframe;


      return '//www.facebook.com/dialog/share?' + _qs2.default.stringify({
        href: href,
        display: display,
        app_id: appId,
        hashtag: hashtag,
        redirect_uri: redirectURI,
        quote: quote,
        mobile_iframe: mobileIframe
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(evn) {
      evn.preventDefault();
      evn.stopPropagation();

      var href = this.getSharerHref();
      var _props2 = this.props;
      var width = _props2.width;
      var height = _props2.height;


      var halfWidth = Math.floor(width / 2);
      var halfHeight = Math.floor(height / 2);

      var left = Math.floor(window.innerWidth / 2 - halfWidth);
      var top = Math.floor(window.innerHeight / 2 - halfHeight);

      var params = 'status=0, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0';

      window.open(href, 'sharer', params);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var className = _props3.className;
      var buttonClassName = _props3.buttonClassName;
      var iconClassName = _props3.iconClassName;
      var icon = _props3.icon;


      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: buttonClassName,
            onClick: this.handleClick
          },
          icon ? _react2.default.createElement('i', { className: iconClassName }) : null,
          this.props.children
        )
      );
    }
  }]);

  return Share;
}(_react.Component);

Share.contextTypes = _extends({}, _FacebookProvider2.default.childContextTypes);
Share.propTypes = {
  href: _react.PropTypes.string,
  target: _react.PropTypes.string.isRequired,
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  buttonClassName: _react.PropTypes.string,
  iconClassName: _react.PropTypes.string,
  icon: _react.PropTypes.bool,
  hashtag: _react.PropTypes.string,
  quote: _react.PropTypes.string,
  mobileIframe: _react.PropTypes.bool,
  display: _react.PropTypes.string.isRequired,
  appId: _react.PropTypes.string,
  redirectURI: _react.PropTypes.string
};
Share.defaultProps = {
  target: '_blank',
  display: 'popup',
  width: 626,
  height: 436,
  buttonClassName: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  icon: true
};
exports.default = Share;