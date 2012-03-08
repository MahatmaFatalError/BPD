Ext.define('MyApp.store.ProcessModuleStore', {
    extend: 'Ext.data.Store',
//    requires: 'MyApp.Model.Main',
    
    config: {
        model: 'MyApp.model.ProcessModule',
        storeId: 'ProcessModuleStore',
        autoLoad: true,
        
        proxy:{
            type: 'ajax',
            url: 'data/processModule.json?id=<id>',	//todo
            
            reader: {
                type: 'json'
                
            }, 
            writer: {
            	type: 'json'
            }
        },
        
    }
});