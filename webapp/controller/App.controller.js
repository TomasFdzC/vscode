sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], 
    /**
    * 
    *@param {typeof sap.ui.core.mvc.Controller} Controller
    *@param {typeof sap.m.MessageToast} MessageToast
    */
    function (Controller, MessageToast, Models) {
        "use strict";
        return Controller.extend("com.vitro.SAPUI5.controller.App",{

            onInit: function (){

            },

            onShowHello: function () {
                //read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMessage = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMessage);
            }
        });
    })