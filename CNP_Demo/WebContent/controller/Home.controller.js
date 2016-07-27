/*jQuery.sap.require("sap.suite.ui.commons.ChartContainer");*/
sap.ui.controller("utegration.cnp.controller.Home", {
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf cnp_demo.Home
*/
	onInit: function() {
	    
		oFragment = sap.ui.xmlfragment("utegration.cnp.fragments.Hourly");
		this.getView().byId("pnl_Hourly").addContent(oFragment);
		oFragment1 = sap.ui.xmlfragment("utegration.cnp.fragments.Daily");
		this.getView().byId("pnl_Daily").addContent(oFragment1);
		
		var oVizFrame = sap.ui.getCore().byId("idVizFrameHourly");
		var oVizDaily = sap.ui.getCore().byId("idVizFrameDaily");
		
		var oData = {
				"businessData":[
					{'Country' : "Canada", 'Product' :'Car', 'profit' : -141.25, 'revenue' : 100 }, 
					{'Country' : "China", 'Product' :'Car', 'profit' : 133.82, 'revenue' : 200}, 
					{'Country' : "France", 'Product' :'Car', 'profit' : 348.76, 'revenue' : 300}, 
					{'Country' : "Germany", 'Product' :'Car', 'profit' : 217.29, 'revenue' : 200}, 
					{'Country' : "India", 'Product' :'Car', 'profit' : 117.00, 'revenue' : 400}, 
					{'Country' : "United States", 'Product' :'Car', 'profit' : 609.16, 'revenue' : 500},
					{'Country' : "Canada", 'Product' :'Truck', 'profit' : -33.25, 'revenue' : 123 }, 
					{'Country' : "China", 'Product' :'Truck', 'profit' : 23.82, 'revenue' : 223.233}, 
					{'Country' : "France", 'Product' :'Truck', 'profit' : 444.76, 'revenue' : 234.11}, 
					{'Country' : "Germany", 'Product' :'Truck', 'profit' : 234.29, 'revenue' : 12}, 
					{'Country' : "India", 'Product' :'Truck', 'profit' : 122.00, 'revenue' : 332.44}, 
					{'Country' : "United States", 'Product' :'Truck', 'profit' : 554.16, 'revenue' : 232}							
				]
			};
			var oModel = new sap.ui.model.json.JSONModel(oData);
			this.getView().setModel(oModel);
			
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions : [{
					name : 'profit',
					value : "{profit}"}],
				               
				measures : [{
					name : 'revenue',
					value : '{revenue}'} ],
				             
				data : {
					path : "/businessData"
				}
			});		
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);	
			oVizFrame.setVizType('line');
			
			oVizFrame.setVizProperties({
	            plotArea: {
	            	colorPalette : d3.scale.category20().range()
	                }});
			
			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			      'uid': "valueAxis",
			      'type': "Measure",
			      'values': ["revenue"]
			    }), 
			    feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			      'uid': "categoryAxis",
			      'type': "Dimension",
			      'values': ["profit"]
			    });
			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);
			
			
			//==============================================================
			
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions : [{
					name : 'profit',
					value : "{profit}"}],
				               
				measures : [{
					name : 'revenue',
					value : '{revenue}'} ],
				             
				data : {
					path : "/businessData"
				}
			});	
			
			oVizDaily.setDataset(oDataset);
			oVizDaily.setModel(oModel);	
			oVizDaily.setVizType('line');
			
			oVizDaily.setVizProperties({
	            plotArea: {
	            	colorPalette : d3.scale.category20().range()
	                }});
			
			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			      'uid': "valueAxis",
			      'type': "Measure",
			      'values': ["revenue"]
			    }), 
			    feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			      'uid': "categoryAxis",
			      'type': "Dimension",
			      'values': ["profit"]
			    });
			oVizDaily.addFeed(feedValueAxis);
			oVizDaily.addFeed(feedCategoryAxis);
			
	},
	
	onHelpClick : function(){
		if (!this._DialogHelp) {
			this._DialogHelp = sap.ui.xmlfragment("utegration.cnp.fragments.Help", this);
			this._DialogHelp.open();
		} else {
			this._DialogHelp.destroy(true);
			this._DialogHelp = sap.ui.xmlfragment("utegration.cnp.fragments.Help", this);
			this._DialogHelp.open();
			this._DialogHelp.addEventListener("click", 
				    function closeDialog (oEvent){
				alert("12SS");
			});
			
			
		}
		

		/*document.addEventListener("click", 
			    function closeDialog (oEvent){
			    
			    if(oEvent.target.id === "sap-ui-blocklayer-popup"){
			      sap.ui.getCore().byId("__xmlview0--myDialog").close();
			      document.removeEventListener("click", closeDialog);
			    }
		});*/
	},
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf cnp_demo.Home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf cnp_demo.Home
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf cnp_demo.Home
*/
//	onExit: function() {
//
//	}

});