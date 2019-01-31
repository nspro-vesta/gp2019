sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("YourNamespace.Component", {

		metadata: {
			rootView: {
				"viewName": "YourNameSpace.view.App",
				"type": "XML",
				"async": true,
				"id": "app"
			}
		},
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			var oData = {
				product: {
					"ProductPicUrl" : "https://images-na.ssl-images-amazon.com/images/I/71iFVjrzsLL._SL1500_.jpg",
					"Name" : "Macbook Air",
					"Price" : "3749",
					"Currency" : "MYR",
					"Availability" : "In Stock",
					"ScreenSize" : "13 inches",
					"Storage" : "128 GB Fast SSD storage",
					"Processor" : "Dual-core Intel Core i5 processor"
				}
			};
			
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
		}
	});
});
