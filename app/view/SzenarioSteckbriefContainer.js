Ext.define('MyApp.view.SzenarioSteckbriefContainer',{         // alle Componenten mit IDs versehen?
    extend: 'Ext.form.Panel',
    xtype: 'SzenarioSteckbriefContainer',
    //alias: 'widget.SteckbriefContainer',

    config:{
        layout: {
            type: 'vbox'
        },
        //fullscreen: true,

	    items: [
	        {
	            docked: 'top',
	            xtype: 'titlebar',
	            //title: 'SNP Scenario Outline',
	            items: [{
	            	xtype: 'button',
	            	id: 'SteckbriefBackBtn',
					ui: 'back',
					iconCls: 'home',
					iconMask: true,
					align: 'left',
		         }]
	        },
	        {
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
	        

	    ],
	}
        
});