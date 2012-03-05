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
            ui: 'dark', 
            docked: 'top',
            items:[{
            	xtype: 'button',
            	id: 'SteckbriefBackBtn',
				ui: 'back',
				iconCls: 'home',
				iconMask: true,
				align: 'left',
            
            }]},
            {
            	//xtype: 'carousel',
            	xtype: 'tabpanel',
				ui: 'dark',
				tabBar:{
		            docked: 'bottom', 
		            layout:{
		                pack: 'center', // this will center the menu
		            }
		        },
				
            	//flex: 1,
            	items:[{	
            		title: 'SNP Process Building Block Overview',								//Carousel card 1
            		xtype: 'container',
            		scrollable: true,
            		items:[{
            			xtype: 'label',
            			id: 'SNPDefinitionLabel',
    					html: 'Short definition: bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
    					padding: 15,
            		},
            		{
            			xtype: 'label',
            			id: 'SNPDescriptionLabel',
    					html: 'Short description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam ',
    					padding: 15,
            		},
            		{
            			xtype: 'fieldset',					// TODO: Anzahl der Fieldset Einträge dynamisch ermitteln!
				        title: 'Process Steps',
				        //padding: 10,
				        margin: 15,
				        //border: 30,
				        
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
				        margin: 15,
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
				        margin: 15,
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
				        margin: 15,
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
            		title: 'Customer Process Building Block Overview',
            		scrollable: true,
            		items:[{
            			xtype: 'label',
            			id: 'CustomerDefinitionLabel',
    					html: 'Short definition: bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
    					padding: 15,
            		},
            		{
            			xtype: 'label',
            			id: 'CustomerDescriptionLabel',
    					html: 'Short description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam ',
    					padding: 15,
            		
            		},
            		
            		{
            			xtype: 'fieldset',					// TODO: Anzahl der Fieldset Einträge dynamisch ermitteln!
				        title: 'Important steps',
				        margin: 15,
				        
				        items:[{
	            			xtype: 'textareafield',
	            			margin: 15,
	            			maxRows: 6,
            			}]
            		},{
            			xtype: 'fieldset',					// TODO: Anzahl der Fieldset Einträge dynamisch ermitteln!
				        title: 'Issues',
				        margin: 15,
				        
				        items:[{
	            			xtype: 'textareafield',
	            			margin: 15,
	            			maxRows: 6
            			}]
            		},{
            			xtype: 'fieldset',					// TODO: Anzahl der Fieldset Einträge dynamisch ermitteln!
				        title: 'Issues',
				        margin: 15,
				        
				        items:[{
	            			xtype: 'textareafield',
	            			margin: 15,
	            			maxRows: 6
            			}]
            		
            		},{
            			xtype: 'fieldset',					// TODO: Anzahl der Fieldset Einträge dynamisch ermitteln!
				        title: 'Others',
				        margin: 15,
				        
				        items:[{
            			xtype: 'textareafield',
	            			margin: 15,
	            			maxRows: 6
            			}]
            		},
            		]
            
            	}   

			]
			}
		]
	}
});