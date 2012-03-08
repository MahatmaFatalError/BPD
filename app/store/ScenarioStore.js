Ext.define('MyApp.store.ScenarioStore', {
    extend: 'Ext.data.Store',
//    requires: 'MyApp.Model.Main',
    
    config: {
        model: 'MyApp.model.Scenario',
        storeId: 'ScenarioStore',
        autoLoad: true,
        
        proxy:{
            type: 'ajax',
            url: 'data/scenario.json?id=<id>',
            
            reader: {
                type: 'json'
                
            }, 
            writer: {
            	type: 'json'
            }
        },
        
    }
});