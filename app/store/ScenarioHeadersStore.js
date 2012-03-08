Ext.define('MyApp.store.ScenarioHeadersStore', {
    extend: 'Ext.data.Store',
//    requires: 'MyApp.Model.Main',
    
    config: {
        model: 'MyApp.model.ScenarioHeaders',
        storeId: 'ScenarioHeadersStore',
        autoLoad: true,
        
        proxy:{
            type: 'ajax',
            url: 'data/scenarioHeaders.json',
            
            reader: {
                type: 'json'
                
            }, 
            writer: {
            	type: 'json'
            }
        },
        
    }
});