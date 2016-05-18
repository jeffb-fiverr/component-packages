module.exports = {
	"packageHeaderText" : "Compare Packages",
	"packages" : [
		{
			"title" : "Standard",
			"currencySymbol" : "$",
			"price" : "15",
			"description" : {
				"descriptionTitle" : "Basic",
				"descriptionText" : "deliver one logo concept with 300dpi jpeg file"
			},
			"features" : [
				{
					"type" : "boolean",
					"title" : "High Resolution",
					"value" : true
				},
				{
					"type" : "boolean",
					"title" : "Logo Transparency",
					"value" : false
				},
				{
					"type" : "boolean",
					"title" : "Source File",
					"value" : false
				},
				{
					"type" : "text",
					"title" : "Revisions",
					"value" : "1"
				},
				{
					"type" : "input",
					"title" : "Delivery Time",
					"options" : [
						{
							"name" : "delivery-time",
							"text" : "6 days",
							"default" : true,
							"value" : 0
						},
						{
							"name" : "delivery-time",
							"text" : "2 days",
							"default" : false,
							"value" : 20
						}
					]
				}
			],
			"selectButtonText" : "Select"
		},
		{
			"title" : "Premium",
			"currencySymbol" : "$",
			"price" : "40",
			"description" : {
				"descriptionTitle" : "Premium",
				"descriptionText" : "Package includes 3 Logo concepts. High Quality logos. Source Files."
			},
			"features" : [
				{
					"type" : "boolean",
					"title" : "High Resolution",
					"value" : true
				},
				{
					"type" : "boolean",
					"title" : "Logo Transparency",
					"value" : true
				},
				{
					"type" : "boolean",
					"title" : "Source File",
					"value" : false
				},
				{
					"type" : "text",
					"title" : "Revisions",
					"value" : "3"
				},
				{
					"type" : "input",
					"title" : "Delivery Time",
					"options" : [
						{
							"name" : "delivery-time",
							"text" : "6 days",
							"default" : true,
							"value" : 0
						},
						{
							"name" : "delivery-time",
							"text" : "2 days",
							"default" : false,
							"value" : 20
						}
					]
				}
			],
			"selectButtonText" : "Select"
		},
		{
			"title" : "Pro",
			"currencySymbol" : "$",
			"price" : "200",
			"description" : {
				"descriptionTitle" : "Copyright Ownership",
				"descriptionText" : "Extension of the Premium Package. Include Stationary Designs and copyright ownership."
			},
			"features" : [
				{
					"type" : "boolean",
					"title" : "High Resolution",
					"value" : true
				},
				{
					"type" : "boolean",
					"title" : "Logo Transparency",
					"value" : true
				},
				{
					"type" : "boolean",
					"title" : "Source File",
					"value" : true
				},
				{
					"type" : "text",
					"title" : "Revisions",
					"value" : "UNLIMITED"
				},
				{
					"type" : "text",
					"title" : "Delivery Time",
					"value" : "6 days"
				}
			],
			"selectButtonText" : "Select"
		}
	]
};