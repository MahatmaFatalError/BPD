Ext.define('MyApp.model.Scenario', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	{name: 'id'},
            {name: 'name'},
            {name: 'definition'},
            {name: 'description'},
            {name: 'customer',    type: 'boolean', defaultValue: false}	
        	
       	],
       	
       	hasMany:{model: 'ProcessModules', name: 'processModules'},
    },
    
});


Ext.define('ProcessModules', {												//reduntant zu MyApp.model.ProcessModulesHeaders ?
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	{name: 'id'},
            {name: 'name'},
            {name: 'x', type: 'int'},
            {name: 'y', type: 'int'},
            {name: 'sap',    type: 'boolean', defaultValue: true},
            {name: 'customer',    type: 'boolean', defaultValue: false}	
        ],
        
        hasMany:{model: 'ProcessModuleSuccessor', name: 'output'},       
        
        belongsTo: 'MyApp.model.Szenario',
        
    }
});



Ext.define('ProcessModuleSuccessor', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id' ],
        belongsTo: 'ProcessModules',
        
    }
});
