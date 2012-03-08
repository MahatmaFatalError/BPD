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


Ext.define('MyApp.model.ReferenceOutline', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['description', 'steps', 'issues', 'improvements', 'others' ],
        belongsTo: 'MyApp.model.ProcessModuleHeaders',
        
    }
});


Ext.define('MyApp.model.CustomerOutline', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['description', 'steps', 'inputs', 'outputs'], //Steps, inputs, outputs in Array packen!?
        hasMany: {model: 'MyApp.model.KPI', name: 'kpi'},
        belongsTo: 'MyApp.model.ProcessModule',
        
    }
});


Ext.define('MyApp.model.KPI', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['name', 'unit', 'value' ],
        belongsTo: 'MyApp.model.CustomerOutline',			
    }
});

