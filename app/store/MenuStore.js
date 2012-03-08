Ext.define('MyApp.store.MenuStore', {
    extend: 'Ext.data.TreeStore',
//    requires: 'MyApp.Model.Main',
    
    config: {
        model: 'MyApp.model.Menu',
        storeId: 'MenuStore',
        autoLoad: true,
        defaultRootProperty: 'items',   //default?
        
        proxy:{
            type: 'ajax',
            url: 'data/menu_nested.json',
            
            reader: {
                type: 'json'
                
            }
        }
        
    }
});