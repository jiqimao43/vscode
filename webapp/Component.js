jQuery.sap.declare("com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.ZUX402_EXTAPP00Extension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "com.sap.training.ux402.fullscreen.UX402_FullScreenExercise",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/ZUX402_EXTAPP00"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.Component.extend(
	"com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.ZUX402_EXTAPP00Extension.Component", {
		metadata: {
			manifest: "json"
		}
	});