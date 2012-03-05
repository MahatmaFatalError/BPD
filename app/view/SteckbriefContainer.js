Ext.define('MyApp.view.SteckbriefContainer',{         // alle Componenten mit IDs versehen?
    extend: 'Ext.Container',
    xtype: 'SteckbriefContainer',
    //alias: 'widget.SteckbriefContainer',

    config:{
        layout: {
            type: 'fit'
        },
        items:[{
            xtype: 'titlebar',
            id: 'SNPSteckbriefTitle',
            ui: 'light', 
            items:[{
            	xtype: 'button',
            	id: 'SteckbriefBackBtn',
				ui: 'back',
				iconCls: 'home',
				iconMask: true,
				align: 'left',
            
            }]},
            {
            	xtype: 'carousel',
            	//fullscreen: true,
            	scrollable: true,
            	items:[{		//Carousel card 1
            		xtype: 'container',
            		items:[{
            			xtype: 'label',
            			id: 'SNPDefinitionLabel',
    					html: 'Short definition: bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
    					padding: 10,
            		},
            		{
            			xtype: 'label',
            			id: 'SNPDescriptionLabel',
    					html: 'Short definition: bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blab',
    					padding: 10,
            		},
            		{
            			xtype: 'fieldset',					// TODO: Anzahl der Fieldset Einträge dynamisch ermitteln!
				        title: 'Process Steps',
				        items: [
				            {
				                xtype: 'textareafield',
				                label: '1.',
				                maxRows: 4,
				                name: 'first'
				            },
				            {
				                xtype: 'textareafield',
				                label: '2.',
				                maxRows: 4,
				                name: 'second'
				            },
				            {
				                xtype: 'textareafield',
				                label: '3.',
				                maxRows: 4,
				                name: 'third'
				            },
				            {
				                xtype: 'textareafield',
				                label: '4.',
				                maxRows: 4,
				                name: 'fourth'
				            }
				        ]
            		},
            		
            		{
            			xtype: 'fieldset',					// TODO: Anzahl der Fieldset Einträge dynamisch ermitteln! + Save while typing
				        title: 'KPI',
				        items: [
				            {
				                xtype: 'textfield',
				                label: 'KPI 1',
				                name: 'firstKPI'
				            },
				            {
				                xtype: 'textfield',
				                label: 'KPI 2',
				                name: 'secondKPI'
				            },
				            {
				                xtype: 'textfield',
				                label: 'KPI 3',
				                name: 'thirdKPI'
				            },
				            {
				                xtype: 'textfield',
				                label: 'KPI 4',
				                name: 'fourthKPI'
				            }
				        ]
            		},
            		
            		{
            			xtype: 'fieldset',					// TODO: Anzahl der Fieldset Einträge dynamisch ermitteln! + Save while typing
				        title: 'Input',
				        items: [
				            {
				                xtype: 'textfield',
				                label: 'input 1',
				                name: 'Input 1'
				            },
				            {
				                xtype: 'textfield',
				                label: 'input 2',
				                name: 'Input 2'
				            }

				        ]
            		},
            		
            		{
            			xtype: 'fieldset',					// TODO: Anzahl der Fieldset Einträge dynamisch ermitteln! + Save while typing
				        title: 'Output',
				        items: [
				            {
				                xtype: 'textfield',
				                label: 'Output 1',
				                name: 'Output 1'
				            },
				            {
				                xtype: 'textfield',
				                label: 'output 2',
				                name: 'Output 2'
				            }

				        ]
            			
            		}
            		]
            	
            	},
            	{
            		//Carousel card2
            		xtype: 'container',
            		fullscreen: true,
            		scrollable: true,
            		items:[{
            			xtype: 'label',
            			id: 'CustomerDefinitionLabel',
    					html: 'Short definition: bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
    					padding: 10,
            		},
            		{
            			xtype: 'label',
            			id: 'CustomerDescriptionLabel',
    					html: 'Short definition: bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla',
    					padding: 10,
            		
            		},
            		
            		{
            			xtype: 'textareafield',
            			label: 'Important steps',
            		
            		},{
            			xtype: 'textareafield',
            			label: 'Issues',
            		
            		},{
            			xtype: 'textareafield',
            			label: 'Possible Improvements',
            		
            		},{
            			xtype: 'textareafield',
            			label: 'Others',
            		
            		},
            		]
            
            	}   
        
        	]}
        
        ]
	}
});