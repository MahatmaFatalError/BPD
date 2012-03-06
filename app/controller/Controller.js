

Ext.define('MyApp.controller.Controller', {
    extend: 'Ext.app.Controller',
    
    //models:[],
    //views:[];
    views:['Viewport', 'MenuContainer', 'SettingsContainer', 'SteckbriefContainer'],
    
    config: {
        refs:{
            //todo
            	Nav: '.Viewport',
                SettingsButton: '#SettingBtn',
                AddSystemButton: '#AddSystemBtn',
                HomeButton: '#HomeBtn',
                Menu: '#SzenarioList',
                WelcomeTitle: '#WelcomeTitle',
                ShortScenarioDescription: '#shortScenDesc',
                DescButton: '#DescriptionBtn',
                SteckBriefBackButton: '#SteckbriefBackBtn',
                TempButton: '#tempBtn',						//Temp
                SNPSteckbriefTitle: '#SNPSteckbriefTitle',
                CustomerPBBContainer: '#CustomerPBBContainer',
                SNPPBBContainer: '#SNPPBBContainer',
                SteckbriefTabPanel: '#SteckbriefTabPanel',
                
                                // Components can be retrieved by using their xtype with an optional . prefix   .gridpanel
                                // An itemId or id must be prefixed with a #                                    #myContainer
                                // Attributes must be wrapped in brackets                                       panel[title="Test"]
             
             	
             
        },
        
        control:{
            //todo
            SettingsButton:{
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
            },
            
            DescButton:{
            	tap: 'onDescBtnTap'
            },
            
            SteckBriefBackButton:{
            	tap: 'onSteckbriefBackBtnTap'
            },
            
            TempButton:{				// temp
            	tap: 'onTempBtnTap',
            },
            SteckbriefTabPanel:{
            	activeitemchange: 'onActiveitemchange',
            },
            
            
            
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
    
    onItemTap: function(list,index,target,record){		
    	console.log('item tapped: ' + record.getSelectedName());
		console.log('item tapped: ' + record.getSelectedDesc());
    	this.getWelcomeTitle().setTitle(record.getSelectedName());
    	this.getShortScenarioDescription().setHtml(record.getSelectedDesc());  
    	
    	this.getDescButton().setHidden(false);
    	
    	//TODO 	
    },
    
    
    onDescBtnTap: function(){
    	console.log('DescButton tapped');
    	this.getNav().setActiveItem(3);
    },
    
    
    onSteckbriefBackBtnTap: function(){
    	this.getNav().setActiveItem(0);
    },
    
    onTempBtnTap:function(){
    	//debugger;
    	this.getNav().setActiveItem(2);
    	//this.getSteckbriefTabPanel().animation = {
        //    type: 'slide',
        //    direction: 'left'
        //};
    },
    
    onActiveitemchange:function(container, newActivePanel, oldPanel){

    	if(newActivePanel.getId() == "SNPPBBContainer"){
    		this.getSNPSteckbriefTitle().setTitle('SNP Process Building Block Outline');
    	} else if(newActivePanel.getId() == 'CustomerPBBContainer'){
    		this.getSNPSteckbriefTitle().setTitle('Personal Process Building Block Outline');
    	};
    
    },
    
    
    
    //onleafitemtap: function(nestedList, list, index, target, record) {          aus Guide für nestedlist
    //        var detailCard = nestedList.getDetailCard();
    //        detailCard.setHtml('You selected: ' + record.get('text'));
    //    }
});