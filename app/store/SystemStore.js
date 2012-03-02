Ext.define('MyApp.store.SystemStore', {
    extend: 'Ext.data.Store',
//    requires: 'MyApp.Model.Main',
    
    config: {
        model: 'MyApp.model.System',
        storeId: 'SystemStore',
        autoLoad: true,
        
        proxy:{
            type: 'ajax',
            url: 'data/system.json',
            
            reader: {
                type: 'json'
                
            }
        },
        
    }
});