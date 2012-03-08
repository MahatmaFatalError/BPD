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
       	
       	hasMany:{model: 'MyApp.model.ProcessModules', name: 'processModules'},
    },
    
});


Ext.define('MyApp.model.ProcessModules', {												//reduntant zu MyApp.model.ProcessModulesHeaders ?
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
        
        hasMany:{model: 'MyApp.model.ProcessModuleSuccessor', name: 'output'},       
        
        belongsTo: 'MyApp.model.Szenario',
        
    }
});



Ext.define('MyApp.model.ProcessModuleSuccessor', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id' ],
        belongsTo: 'MyApp.model.ProcessModules',
        
    }
});
