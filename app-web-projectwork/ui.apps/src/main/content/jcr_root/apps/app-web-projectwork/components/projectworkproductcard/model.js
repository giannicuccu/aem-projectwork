'use strict';

function featureCardsCallback (){

	
    // this is ment to hold the value of node ./product-carousel/slides, so later we can iterate over it's childs (slides)
    var sliderItemsResourceNodeIterator = resource.getChild("cards").getChildren();
    var sliderItems = [];
    
    for(var sliderItemsIndex in sliderItemsResourceNodeIterator){

        var sliderItemResource = sliderItemsResourceNodeIterator[sliderItemsIndex];
        
        // first of all, let me iterate over the features
        // var productFeaturesIterator = sliderItemResource.getChild("features").getChildren();
        // var productFeatures = []; 
        
        // for(var productFeaturesIndex in productFeaturesIterator){
        //     var productFeatureResource =  productFeaturesIterator[productFeaturesIndex];

        //     productFeatures[productFeaturesIndex] = {
        //         feature: productFeatureResource.adaptTo(org.apache.sling.api.resource.ValueMap).get("feature", java.lang.String)
        //     };
        // }
        
        var sliderItemValueMap = sliderItemResource.adaptTo(org.apache.sling.api.resource.ValueMap);
        
        sliderItems[sliderItemsIndex] = {
            title: sliderItemValueMap.get("title", java.lang.String),
        	imagePath: sliderItemValueMap.get("imagePath", java.lang.String)
        };
    }
    
    return {
      	cards: sliderItems
    };
}

use (featureCardsCallback);