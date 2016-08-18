'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Parser2 = require('./Parser');

var _Parser3 = _interopRequireDefault(_Parser2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmbeddedPost = function (_Parser) {
  _inherits(EmbeddedPost, _Parser);

  function EmbeddedPost() {
    _classCallCheck(this, EmbeddedPost);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmbeddedPost).apply(this, arguments));
  }

  _createClass(EmbeddedPost, [{
    key: 'renderComponent',
    value: function renderComponent() {
      var _props = this.props;
      var href = _props.href;
      var width = _props.width;
      var showText = _props.showText;
      var children = _props.children;


      return _react2.default.createElement(
        'div',
        {
          className: 'fb-post',
          'data-href': href,
          'data-width': width,
          'data-show-text': showText
        },
        children
      );
    }
  }]);

  return EmbeddedPost;
}(_Parser3.default);

EmbeddedPost.propTypes = {
  href: _react.PropTypes.string.isRequired,
  width: _react.PropTypes.number.isRequired,
  showText: _react.PropTypes.bool.isRequired,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string
};
EmbeddedPost.contextTypes = _extends({}, _Parser3.default.contextTypes);
EmbeddedPost.defaultProps = {
  href: 'http://www.facebook.com',
  width: 500, // 350 - 750
  showText: false
};
exports.default = EmbeddedPost;