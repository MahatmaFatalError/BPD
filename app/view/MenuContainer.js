Ext.define('MyApp.view.MenuContainer',{         // alle Componenten mit IDs versehen?
    extend: 'Ext.Container',
    xtype: 'MenuContainer',
    
    config:{
        layout: {
            type: 'hbox'
        },
        items:[
            {
                xtype: 'nestedlist',            // Detail Container                           <<---===http://docs.sencha.com/touch/2-0/#!/guide/nested_list
                                                //Nested List has a detailContainer configuration which is used to specify the container of the detailCard. 
                                                //This is used when you want the detailCard to be in another container, 
                                                //which is often the case when the screen size is bigger than a normal phone.
                                                
                //detailContainer: 'detailContainer',
                //detailCard: true,                                 

                store: 'MenuStore',
                displayField: ['name', 'desc'],
                itemTpl: ['{name}'],
                id: 'SzenarioList',    
                flex: 1,					//Titlebar hat er utomatisch erkannt !!!
                toolbar:{
                	xtype: 'titlebar',
                	docked: 'top',
                	ui: 'light',
                	title: 'Menu',
                	inline: true,
                	items:[{
                		xtype: 'button',
    					//docked: 'right',
    					id: 'AddSzenarioBtn',
    					iconCls: 'add',
    					iconMask: true,
    					align: 'right',
    					hidden: true
                	},
                	{
                		xtype: 'button',
	                    id: 'SettingBtn',
	                    text: 'Settings',
	                    iconCls: 'settings',
	                    iconMask: true,
	                    align: 'right',
                	}]
                },
                items:[{
                
                	xtype: 'container',
                	layout: 'fit',
                	docked: 'bottom',
                	id: 'shortScenDesc',
                	height: 170,
                	borer: 10,		//??
                	maxHeight : 170,
                	padding: 10,
                	style: 'background-color: #D3D3D3',			// TODO: Hexafarbe 
                	items:[{
                		xtype: 'toolbar',
	                    docked: 'top',
	                    ui: 'light',
	                    title: 'Description',
	                    
	                    items: [{
		                    xtype: 'button',
		                    id: 'DescriptionBtn',
		                    //docked: 'right',
		                    hidden: true,
		                    align: 'right',
		                    iconCls: 'arrow_up',
		                    iconMask: true,
	                    
                		}]},
                		
                		{
                			//Textpane einabauen --> obsolet
                		}
                	]	             	
                }]         
            
            },
            {
                xtype: 'panel',
                flex: 2,
                layout: 'fit',			//??
                
                items: [{
                    xtype: 'titlebar',
                    id: 'WelcomeTitle',
                    docked: 'top',
                    ui: 'dark',
                    title: 'Welcome',
                    items: [{				//behilfs Button
                    	xtype: 'button',	//behilfs Button
                    	id: 'tempBtn',
                    	text: 'hier gehts zum Steckbrief',
                    	                    	
                    }]
                }]
            }
        
        ]
 
     
        //EventListener     --> ka ob die hier richtig sind, eher in Controller         Wahrscheinlich eher was für popups
    
    }
        

});