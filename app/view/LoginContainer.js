Ext.define('MyApp.view.LoginContainer',{         // alle Componenten mit IDs versehen?
    extend: 'Ext.Container',
    xtype: 'LoginContainer',

    
    config:{
        //layout: 'fit',		
		padding: 60,
		//width: 450,
		//centered: true,
        items: [{
	        xtype: 'fieldset',
			margin: 60,
			
	        items: [
	            {
	                xtype: 'textfield',
	                name : 'name',
	                label: 'Name'
	            },
	            {
	                xtype: 'passwordfield',
	                name : 'password',
	                label: 'Password'
	            }
	        ]
    	},
    	{
    		xtype: 'button',
    		id: 'loginBtn',
    		text: 'Login',
    		margin: 60,
			
    		
    	}
    	]

    
    }
        

});