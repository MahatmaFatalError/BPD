Ext.define('MyApp.view.Viewport', {     //Todo: viewport in Senchacon video1 checken --> ggf durch Ext.navigation.View ersetzen!!!
    extend: 'Ext.Panel',
 	xtype: 'Viewport',			// unsicher
 
    config: {
        layout: {
	        type: 'card',
	        animation: {
	            type: 'fade',		//pop, fade, flip, slide
	            //direction: 'down',
	            //reveal: true,
	        }
	    },
	    fullscreen: true,
        items: [
            {
                xtype: 'MenuContainer' //ongoing: alle selbst erstellen Views, wie zb SettingsContainer etc
            },
            {
            	xtype: 'SettingsContainer'
            },
            {
            	xtype: 'SteckbriefContainer',
            },
            {
            	xtype: 'SzenarioSteckbriefContainer',
            },
            {
            	xtype: 'LoginContainer'
            }
            			// KEIN , KOMMA !!!!!
            
        ]
    },
 
    initialize: function() {
    	//debugger;
        this.setActiveItem(4);
    }
});

