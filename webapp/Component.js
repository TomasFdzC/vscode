sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel",
    "com/vitro/SAPUI5/model/Models"
],
    /**
    * 
    *@param {typeof sap.ui.core.UIComponent} UIComponent
    *@param {sap.ui.model.resource.ResourceModel} ResourceModel
    *@param {com.vitro.SAPUI5.model.Models} Models
    */
function(UIComponent,ResourceModel,Models) {
    'use strict';
    
    return UIComponent.extend("com.vitro.SAPUI5.Component",{
         metadata: {
            manifest:"json"
            // "rootView":{
            //     "viewName":"UI5.view.App",
            //     "type":"XML",
            //     "async":true,
            //     "id":"app"
            // }
         },

        init : function(){
            //call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            //set model
            this.setModel(Models.createRecipient());
            //set i18n
           // var i18nModel = new ResourceModel({bundleName : "UI5.i18n.i18n"})
           // this.setModel(i18nModel,"i18n");
            
        }
    })
});