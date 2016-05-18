import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import PackageHeader from './PackageHeader';
import PackageList from './PackageList';

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

	function renderComponent() {
		ReactDOM.render(
		  <div className="package-container">
        <PackageHeader packageHeaderText={data.packageHeaderText} />
        <PackageList model={data} />
      </div>,
		  document.getElementById(data.containerId)
		);
	};

	return {
		init: init
	}
};

module.exports = PackageComponent;