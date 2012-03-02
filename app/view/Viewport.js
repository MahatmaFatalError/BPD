Ext.define('MyApp.view.Viewport', {     //Todo: viewport in Senchacon video1 checken --> ggf durch Ext.navigation.View ersetzen!!!
    extend: 'Ext.Panel',
 	xtype: 'Viewport',			// unsicher
 
    config: {
        fullscreen: true,
        layout: 'card',
        cardSwitchAnimation: 'slide',
        items: [
            {
                xtype: 'MenuContainer' //ongoing: alle selbst erstellen Views, wie zb SettingsContainer etc
            },
            {
            	xtype: 'SettingsContainer'
            }
        ]
    },
 
    initialize: function() {
    	//debugger;
        this.setActiveItem(0);
    }
});

