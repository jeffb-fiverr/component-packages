const $ = require('jquery');
const PackageComponent = require('../../dist/js/PackageComponent');
const model = require('../../models/packages');

$(function() {
	const packages = new PackageComponent(model);
	packages.init();
});