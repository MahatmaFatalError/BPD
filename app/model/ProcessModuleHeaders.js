Ext.define('MyApp.model.ProcessModuleHeaders', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['areaName' ],
        hasMany: {model: 'MyApp.model.ProcessModulesHeaders', name: 'processModules'},			//Plural
    },
    
    validations:[{type: 'inclusion', field: 'areaName',   list: ['SD', 'MM', 'FI', 'CO', 'HCM', 'PP' ]}],
    
});


Ext.define('MyApp.model.ProcessModulesHeaders', {												//reduntant zu MyApp.model.ProcessModuleHeaders ?
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'name', 'definition' ],
        belongsTo: 'MyApp.model.ProcessModuleHeaders',
        
    }
});




//proxy: {type: 'rest', url : '/users'}					// REST Proxy



//Todo: Methoden