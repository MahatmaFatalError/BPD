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
    		itemTpl: ['{projectName}'],
    		store: 'SystemStore',
    		flex: 1,
    		items:[{
    			xtype: 'titlebar',
    			docked: 'top',
    			ui: 'light',
    			title: 'Projects',
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
				//layout: 'fit',
				flex: 2,
				padding: 50,
				items:[{
					xtype: 'titlebar',
					docked: 'top',
					title: 'Settings'
					
				},
				{
					xtype: 'fieldset',
					//margin: 50,
			        items: [
			            {
			                xtype: 'textfield',
			                name : 'name',
			                label: 'System'
			            },
			            {
			                xtype: 'textfield',
			                name : 'hostName',
			                label: 'Hostname'
			            },
			            {
			                xtype: 'passwordfield',
			                name : 'password',
			                label: 'Password'
			            }
			        ]
				}
				]
			}
    	]
	}
});