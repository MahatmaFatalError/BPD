Ext.Loader.setConfig({ enabled: true });

Ext.application({
    name: 'MyApp',
    
//    requieres:['MyApp.model.Menu','MyApp.store.MenuStore'],
    //    profiles: ['Tablet'];
    models:['Menu', 'System'],
    stores:['MenuStore', 'SystemStore'],
    views:['Viewport', 'MenuContainer', 'SettingsContainer'],
    controllers:['Controller'],

    launch: function(){
        //debugger;
        Ext.create('MyApp.view.Viewport');
        
    },
    
    autoCreateViewport: true


});