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
                                                //nestedList - this is a reference to the nested list instance.
                                                //list - this is a reference to the last list, where the item with the leaf config was tapped.
                                                //index - the index of the record in the list store.
                                                //target - the element which was tapped.                <<----===
                                                //record - the record of the item which was tapped.
                store: 'MenuStore',
                displayField: 'name',
                title: 'Menu',
                id: 'SzenarioList',    
                flex: 1,					//Titlebar hat er utomatisch erkannt !!!
                items:[{
                	xtype: 'toolbar',
                    docked: 'bottom',
                    ui: 'light',
                    items: [{
	                    xtype: 'button',
	                    id: 'SettingBtn',
	                    text: 'Settings',
	                    iconCls: 'settings',
	                    iconMask: true
                	}]
                },
                {
                	
                }               
                ]
                
            
            },
            {
                xtype: 'panel',
                flex: 2,
                layout: 'fit',			//??
                
                items: [{
                    xtype: 'toolbar',
                    id: 'WelcomeTitle',
                    docked: 'top',
                    ui: 'dark',
                    title: 'Welcome'
                }]
            }
        
        ]
 
     
        //EventListener     --> ka ob die hier richtig sind, eher in Controller         Wahrscheinlich eher was für popups
    
    }
        

});