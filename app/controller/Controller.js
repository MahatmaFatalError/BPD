

Ext.define('MyApp.controller.Controller', {
    extend: 'Ext.app.Controller',
    
    //models:[],
    //views:[];
    
    
    config: {
        refs:{
            //todo
            	nav: '.Viewport',
                settingsButton: '#SettingBtn',
                AddSystemButton: '#AddSystemBtn',
                HomeButton: '#HomeBtn',
                Menu: '#SzenarioList',
                WelcomeTitle: '#WelcomeTitle',
                                // Components can be retrieved by using their xtype with an optional . prefix   .gridpanel
                                // An itemId or id must be prefixed with a #                                    #myContainer
                                // Attributes must be wrapped in brackets                                       panel[title="Test"]
             
             	
             
        },
        
        control:{
            //todo
            settingsButton:{
                tap: 'goSettings'
            },
            AddSystemButton:{
            	tap: 'addSystem'
            },
            
            HomeButton:{
            	tap: 'goHome'
            },
            
            Menu:{
            	itemtap: 'onItemTap'
            }
            
            
        }
    },
    
    //init: function(){}
    
    //launch: function(){}
    
    
    //<<eigene Methoden implementiern>>
    
    
//    onSettingsButtonTap: function(){
        //this.getSettingsButton()   falsch
//    },
    
    goSettings: function(){
        console.log('Settings pressed');
        this.getNav().setActiveItem(1);		//setActiveItem() von zahl auf xtype oder id wechseln?
       										// in Viewport.js xtype anpassen von settingContainer und dann hier wehcseln
    },
    
    goHome: function(){
    	console.log('Home pressed');
        this.getNav().setActiveItem(0);
    },
    
    
    addSystem: function(){
    	console.log('Add System pressed');
        //todo popup
    },
    
    onItemTap: function(record){
    	console.log('item tapped');

    	console.log(record.getSelectedItem());		//record ist wichtig

    	//this.getWelcomeTitle.setTitle(record.getSelectedItem());
    	//var title = this.getWelcomeTitle();
		//console.log(this.getMenu().getTitle());		//warum geht das net!?!??!

    	
    }
    
    
    
    
    
    //onleafitemtap: function(nestedList, list, index, target, record) {          aus Guide für nestedlist
    //        var detailCard = nestedList.getDetailCard();
    //        detailCard.setHtml('You selected: ' + record.get('text'));
    //    }
});