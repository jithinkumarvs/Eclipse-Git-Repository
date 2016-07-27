jQuery.sap.declare("utegration.cnp.Component");

sap.ui.core.UIComponent.extend("utegration.cnp.Component", {
	metadata : {
		routing : {
			config : {
				viewType : "XML",
				viewPath : "utegration.cnp.view",
				/*targetControl:"app",*/
				controlId : "app",
				targetAggregation : "pages",
				clearTarget : false
			},
			routes : [ {
				pattern : "",
				name : "Home",
				view : "Home"
			},{
				pattern : "Demo",
				name : "HomeDemo",
				view : "HomeDemo"
			}, ]
		}
	}
});

utegration.cnp.Component.prototype.init = function() {
	jQuery.sap.require("sap.ui.core.routing.History");
	jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

	sap.ui.core.UIComponent.prototype.init.apply(this);

	var router = this.getRouter();
	this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
	router.initialize();
};
utegration.cnp.Component.prototype.destroy = function() {
	if (this.routeHandler) {
		this.routeHandler.destroy();
	}
	sap.ui.core.UIComponent.destroy.apply(this, arguments);
};
utegration.cnp.Component.prototype.createContent = function() {
	this.view = sap.ui.view({
		id : "app",
		viewName : "utegration.cnp.view.App",
		type : sap.ui.core.mvc.ViewType.XML
	});
	return this.view;
};