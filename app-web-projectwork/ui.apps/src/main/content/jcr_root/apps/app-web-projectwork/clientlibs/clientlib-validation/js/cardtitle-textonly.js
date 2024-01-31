(function($, Coral){

    "use strict";

	
	// get foundation registry
	var registry = $(window).adaptTo("foundation-registry");
	
	// register custom validator
	registry.register("foundation.validation.validator", {
	    // name of function to use in dialog
	    selector: "[data-validation=cardtitle-textonly]",
	    // validator logic
	    validate: function (element) {
	        // get jquery version of element
	        var el = $(element);
            //console.log("pippox")
	
	        var value = el.val();
	        var minLength = el.data("min-length") || 3 ;
	        
	        if(value === undefined ||  value.length == 0 ){
				return "Cannot accept an empty value";

			}else if(minLength && value.length < minLength){
				return "Length of value must be at least " + minLength + " chars";
			}

			var pattern = /[\w ]+/;
	
	        if (! pattern.test(value)) {
	            return "Field has an incorrect value";
	        }
	        // no return means multifield has correct number of items
	    },
	});
	

})(jQuery, Coral);