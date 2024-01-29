'use strict';

function contactItemsCallback (){	
    
    var contatctItemsResourceNodeIterator = resource.getChild("contactItems").getChildren();
    var contactItems = [];
    
     for(var contactItemsIndex in contatctItemsResourceNodeIterator){
         //log.info("loop>>> "+contactItemsIndex);
         
         var contactItemResource = contatctItemsResourceNodeIterator[contactItemsIndex];         
         var  contactItemValueMap = contactItemResource.adaptTo(org.apache.sling.api.resource.ValueMap);
         
         contactItems[contactItemsIndex] = {
             label: contactItemValueMap.get("contactLabel", java.lang.String),
             value: contactItemValueMap.get("contactValue", java.lang.String)
            };
     }

    return {
        items: contactItems
    };
}

use (contactItemsCallback);