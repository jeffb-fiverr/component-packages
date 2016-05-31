module.exports = {
	"packageHeaderText" : "Compare Packages",
	"packages" : [
		{
			"title" : "Standard",
			"currencySymbol" : "$",
			"price" : "15",
			"description" : {
        "descriptionLabel" : "Description",
				"descriptionTitle" : "BASIC",
				"descriptionText" : "deliver one logo concept with 300dpi jpeg file"
			},
			"features" : [
				{
					"type" : "boolean",
					"label" : "High Resolution",
					"value" : true
				},
				{
					"type" : "boolean",
					"label" : "Logo Transparency",
					"value" : false
				},
				{
					"type" : "boolean",
					"label" : "Source File",
					"value" : false
				},
				{
					"type" : "text",
					"label" : "Revisions",
					"value" : "1"
				},
				{
					"type" : "input",
					"label" : "Delivery Time",
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
        "descriptionLabel" : "Description",
				"descriptionTitle" : "PREMIUM",
				"descriptionText" : "Package includes 3 Logo concepts. High Quality logos. Source Files."
			},
			"features" : [
				{
					"type" : "boolean",
					"label" : "High Resolution",
					"value" : true
				},
				{
					"type" : "boolean",
					"label" : "Logo Transparency",
					"value" : true
				},
				{
					"type" : "boolean",
					"label" : "Source File",
					"value" : false
				},
				{
					"type" : "text",
					"label" : "Revisions",
					"value" : "3"
				},
				{
					"type" : "input",
					"label" : "Delivery Time",
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
        "descriptionLabel" : "Description",
				"descriptionTitle" : "COPYRIGHT OWNERSHIP",
				"descriptionText" : "Extension of the Premium Package. Include Stationary Designs and copyright ownership."
			},
			"features" : [
				{
					"type" : "boolean",
					"label" : "High Resolution",
					"value" : true
				},
				{
					"type" : "boolean",
					"label" : "Logo Transparency",
					"value" : true
				},
				{
					"type" : "boolean",
					"label" : "Source File",
					"value" : true
				},
				{
					"type" : "text",
					"label" : "Revisions",
					"value" : "UNLIMITED"
				},
				{
					"type" : "text",
					"label" : "Delivery Time",
					"value" : "6 days"
				}
			],
			"selectButtonText" : "Select"
		}
	]
};