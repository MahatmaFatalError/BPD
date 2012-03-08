Ext.define('MyApp.store.ProcessModuleHeadersStore', {
    extend: 'Ext.data.Store',
//    requires: 'MyApp.Model.Main',
    
    config: {
        model: 'MyApp.model.ProcessModuleHeaders',
        storeId: 'ProcessModuleHeadersStore',
        autoLoad: true,
        
        proxy:{
            type: 'ajax',
            url: 'data/processModuleHeaders.json',
            
            reader: {
                type: 'json'
                
            }, 
            writer: {
            	type: 'json'
            }
        },
        
    }
});