Ext.define('MyApp.view.SettingsContainer',{         // alle Componenten mit IDs versehen?
    extend: 'Ext.Container',
    xtype: 'SettingsContainer',
    //alias: 'widget.SettingsContainer',
    
    
    config:{
        layout: {
            type: 'hbox'
        },
        items:[{
    		xtype: 'list',
    		itemTpl: ['{name}'],
    		store: 'SystemStore',
    		flex: 1,
    		items:[{
    			xtype: 'titlebar',
    			docked: 'top',
    			ui: 'light',
    			title: 'Systems',
    			items:[{
    				xtype: 'button',
    				//docked: 'left',
    				id: 'HomeBtn',
    				ui: 'back',
    				iconCls: 'home',
    				iconMask: true,
    				align: 'left'		
    			},
    			{
    				xtype: 'button',
    				//docked: 'right',
    				id: 'AddSystemBtn',
    				iconCls: 'add',
    				iconMask: true,
    				align: 'right'
    			}]}			
    		]
    		},
    		
    		{
				xtype: 'panel',
				layout: 'fit',
				flex: 2,
				items:[{
					xtype: 'titlebar',
					docked: 'top',
					title: 'Settings'
			}]}
    	]
	}
});