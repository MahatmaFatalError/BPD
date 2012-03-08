Ext.Loader.setConfig({ enabled: true });

Ext.application({
    name: 'MyApp',

//    requieres:['MyApp.model.Menu','MyApp.store.MenuStore'],
    //    profiles: ['Tablet'];
    models:['Menu', 'System','ProcessModuleHeaders','ProcessModulesHeaders','ProcessModule','ReferenceOutline','CustomerOutline','KPI','ScenarioHeader','Scenario','ProcessModules','ProcessModuleSuccessor'],
    stores:['MenuStore', 'SystemStore','ProcessModulesStore','ProcessModuleHeadersStore','ScenarioHeaderStore', 'ScenarioStore'],
    views:['LoginContainer', 'MenuContainer', 'SettingsContainer', 'SteckbriefContainer', 'SzenarioSteckbriefContainer', 'Viewport', ],		
    controllers:['Controller'],

    launch: function(){
		//debugger;
        
        
        Ext.create('MyApp.view.Viewport');
        
    },
    
    //autoCreateViewport: true


});