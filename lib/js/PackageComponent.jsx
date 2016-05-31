import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import PackageContainer from './PackageContainer';

function PackageComponent(model) {

	let data = model;

	function init() {
		getData();
		renderComponent();
	};

	function getData() {
		const $dataContainer = $('[data-packages]');

		data.containerId = $dataContainer.attr('id');
	};

  function bindUserActions() {
    // hover effect
    const $table = $('.package-container'),
          $columnTrs = $table.find('tr'),
          $columnTds = $columnTrs.find('td');

    let columnIndex,
        $hoveredCell;

    $columnTds.hover(function() {
      $hoveredCell = $(this);
      columnIndex = $hoveredCell.index();

      if (columnIndex) {
        $columnTrs.each(function() {
          $('td', this).eq(columnIndex).addClass('hovering-column');
        });
      }
    }, () => {
      $columnTrs.each(function() {
          $('td', this).eq(columnIndex).removeClass('hovering-column');
        });
    });
  };

	function renderComponent() {

		ReactDOM.render(
      <PackageContainer model={data} events={bindUserActions} />,
		  document.getElementById(data.containerId)
		);
	};

	return {
		init: init
	}
};

module.exports = PackageComponent;