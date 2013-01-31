 Aria.classDefinition({
 	$classpath : 'snippets.modules.flow_controllers.MyModuleFlow',
 	$extends : 'aria.templates.FlowCtrl',
 	$implements: ['snippets.modules.flow_controllers.IMyModuleFlow'],
 	$constructor:function() {
 		this.$FlowCtrl.constructor.call(this);
 	},
 	$prototype: {
 		$publicInterfaceName: 'snippets.modules.flow_controllers.IMyModuleFlow',

 		// Intercepting method called at the end of the module controller initialization:
 		oninitCallback : function (param) {
 			this.$FlowCtrl.oninitCallback.call(this, param); // call the method of the parent which sets this.data
 			this.flowData={
 				currentState:"search", // indicates the current page id - enum: 'search', 'avail' or 'info'
 				transitionStates:{
 					// tell which transitions/navigations are authorized
 					search:false, // true when we authorize the navigation to the search screen
 					              // (could be bound to the 'back to search' link enabled property)
 					avail:false, // true when an avail result is available
 					info:false, // true when one info is available
 					back:false  // true if we can navigate back
 				}
 			};
 			// the flow data is stored in the data model, to be accessible by templates:
 			this.data['flow:data'] = this.flowData;
 		},

 		// navigate is published in the Flow interface
 		navigate:function(transition) {
 			if (transition=='back') {
 				this.back()
 				return;
 			}
 			var fd=this.flowData;
 			if (transition==fd.currentState || !fd.transitionStates[transition]) {
 				// invalid transition
 				return this.$logError("FLOW_INVALID_TRANSITION",[transition]);
 			}
 			// let's assusme we can come back to the current (and soon ex-current) state
 			fd.transitionStates[fd.currentState]=true;
 			// change current state to new state
 			fd.currentState=transition;
 			// prevent navigation to the current state (nav buttons must be grayed)
 			fd.transitionStates[fd.currentState]=false;
 			// raise event to notify templates that current state changed
 			// TODO: update history stack
 			this.$raiseEvent("stateChange");
 		},

 		back:function() {
 			if (!fd.transitionStates.back) {
 				// invalid transition
 				return this.$logError("FLOW_BACK_NOT_ALLOWED",[state]);
 			}
 			// TODO manage history stack
 		},

 		clearHistory:function(state) {
 			// state is optional - if passed, only this state is removed from the history
 			// TODO implement method
 		},

 		// sample of connection of the flow on an 'Callback' event
 		ongetFlightAvailabilityCallback:function() {
 			var mcd=this.data; // this.data contains the data model
 			// we assume here that the flight avail is in 'flights' array
 			// in an 'avails' map in the module ctrl data model
 			if (mcd.avails.flights.length==0) {
 				// this flow assumes that in the case of no result we display
 				// a warning in a msg box and stay on the current page
 				// as such we raise an event instead of changing the flow state through navigate()...
 				this.$raiseEvent("emptyFlightAvailReceived");
 			} else {
 				this.navigate("avail");
 			}
 		},

 		ongetFlightInfoCallEnd:function() {
 			// same as onGetFlightAvailabilityComplete - but the case of no info should be treated as an error
 			// as the getFlightInfo() method is not a search()
 			this.navigate("info");
 		}
 	}
 });
