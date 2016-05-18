'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _PackageHeader = require('./PackageHeader');

var _PackageHeader2 = _interopRequireDefault(_PackageHeader);

var _PackageList = require('./PackageList');

var _PackageList2 = _interopRequireDefault(_PackageList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PackageComponent(model) {

	var data = model;

	function init() {
		getData();
		renderComponent();
	};

	function getData() {
		var $dataContainer = (0, _jquery2.default)('[data-packages]');

		data.containerId = $dataContainer.attr('id');
	};

	function renderComponent() {
		_reactDom2.default.render(_react2.default.createElement(
			'div',
			{ className: 'package-container' },
			_react2.default.createElement(_PackageHeader2.default, { packageHeaderText: data.packageHeaderText }),
			_react2.default.createElement(_PackageList2.default, { model: data })
		), document.getElementById(data.containerId));
	};

	return {
		init: init
	};
};

module.exports = PackageComponent;