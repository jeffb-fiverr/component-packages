'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _PackageContainer = require('./PackageContainer');

var _PackageContainer2 = _interopRequireDefault(_PackageContainer);

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

  function bindUserActions() {
    // hover effect
    var $table = (0, _jquery2.default)('.package-container'),
        $columnTrs = $table.find('tr'),
        $columnTds = $columnTrs.find('td');

    var columnIndex = void 0,
        $hoveredCell = void 0;

    $columnTds.hover(function () {
      $hoveredCell = (0, _jquery2.default)(this);
      columnIndex = $hoveredCell.index();

      if (columnIndex) {
        $columnTrs.each(function () {
          (0, _jquery2.default)('td', this).eq(columnIndex).addClass('hovering-column');
        });
      }
    }, function () {
      $columnTrs.each(function () {
        (0, _jquery2.default)('td', this).eq(columnIndex).removeClass('hovering-column');
      });
    });
  };

  function renderComponent() {

    _reactDom2.default.render(_react2.default.createElement(_PackageContainer2.default, { model: data, events: bindUserActions }), document.getElementById(data.containerId));
  };

  return {
    init: init
  };
};

module.exports = PackageComponent;