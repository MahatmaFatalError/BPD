Ext.define('MyApp.model.ProcessModule', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'name', 'definition' ],
        hasOne: [
        	{model: 'MyApp.model.ReferenceOutline', name: 'referenceOutline'},
        	{model: 'MyApp.model.CustomerOutline', name: 'customerOutline'}
        ]
    },
    
});


Ext.define('ReferenceOutline', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['description', 'steps', 'issues', 'improvements', 'others' ],
        belongsTo: 'MyApp.model.ProcessModuleHeaders',
        
    }
});


Ext.define('CustomerOutline', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['description', 'steps', 'inputs', 'outputs'], //Steps, inputs, outputs in Array packen!?
        hasMany: {model: 'KPI', name: 'kpi'},
        belongsTo: 'MyApp.model.ProcessModule',
        
    }
});


Ext.define('KPI', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['name', 'unit', 'value' ],
        belongsTo: 'CustomerOutline',			
    }
});

//associations: [{
//            type: 'hasMany',					//belongsTo
//            model: 'MyApp.model.Group',
//            primaryKey: 'id',
//            foreignKey: 'parent_id',
//            autoLoad: true,
//            associationKey: 'child_groups' // read child data from child_groups
//        }]



//automatische getter generierung?