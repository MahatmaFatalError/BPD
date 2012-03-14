

Ext.define('MyApp.controller.Controller', {
    extend: 'Ext.app.Controller',
    
    
    
    //models:[],
    //views:[];
    //views:['Viewport', 'MenuContainer', 'SettingsContainer', 'SteckbriefContainer'],
    //stores:['MenuStore', 'SystemStore'],
    
    config: {
    	before:{
    		onLoginTap: 'authenticate', 
    	},
    
        refs:{
            //todo
        	Nav: '.Viewport',
        	LoginButton: '#loginBtn',
            SettingsButton: '#SettingBtn',
            AddSystemButton: '#AddSystemBtn',
            AddSzenarioBtn: '#AddSzenarioBtn',
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
            ScenarioOutlineTitleBar: '#ScenarioOutlineTitleBar',
                
                                // Components can be retrieved by using their xtype with an optional . prefix   .gridpanel
                                // An itemId or id must be prefixed with a #                                    #myContainer
                                // Attributes must be wrapped in brackets                                       panel[title="Test"]
             
             	
             
        },
        
        control:{
            //todo
            
            LoginButton:{
            	tap: 'onLoginTap'
            },
            
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
            	itemtap: 'onMenuItemTap',
            	leafitemtap: 'onLeafItemTap',
            	back: 'back',
            },
            
            AddSzenarioBtn:{
            	tap: 'onAddSzenarioBtnTap'
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
            	activeitemchange: 'onBBSOutlineActiveitemchange',
            },
            
            
            
        }
    },
    
    //init: function(){}
    
    //launch: function(){}
    
    
    //<<eigene Methoden implementiern>>
    
    
//    onSettingsButtonTap: function(){
        //this.getSettingsButton()   falsch
//    },


	authenticate: function(action){					// Funzt nicht!!!!
		console.log('Login');
		debugger;
		action.resume();
	},
	

	onLoginTap: function(){
		this.getNav().setActiveItem(0)
	},

    
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
    
    onMenuItemTap: function(nestedlist, list,index,target,record){		
    	//console.log('item tapped: ' + record.getSelectedName());
		//console.log('item tapped: ' + record.getSelectedDesc());
    	this.getWelcomeTitle().setTitle(record.getSelectedName());
    	this.getShortScenarioDescription().setHtml(record.getSelectedDesc());  
    	

    	
    	if(record.getSelectedName() == 'Customer'){
    		this.getSettingsButton().setHidden(true);
    		this.getAddSzenarioBtn().setHidden(false);
    	} else {
    		this.getSettingsButton().setHidden(false);
    		this.getAddSzenarioBtn().setHidden(true);
    	
    	}
    	
    	//TODO 	
    },
    
    onLeafItemTap: function(nestedlist, list,index,target,record){		
    	//console.log('item tapped: ' + record.getSelectedName());
		//console.log('item tapped: ' + record.getSelectedDesc());
    	this.getWelcomeTitle().setTitle(record.getSelectedName());
    	this.getShortScenarioDescription().setHtml(record.getSelectedDesc());  
    	
    	this.getDescButton().setHidden(false);
    	    	
    	//TODO 	
    },
    
    back: function(nestedlist, node, lastActiveList, detailCardActive){
    	this.getSettingsButton().setHidden(false);
    	this.getAddSzenarioBtn().setHidden(true);
    	this.getDescButton().setHidden(false);
    	this.getWelcomeTitle().setTitle('Welcome to SNP Business Process Designer');
    	this.getShortScenarioDescription().setHtml('');
    	
    },
    
    onAddSzenarioBtnTap: function(){
    	Ext.Msg.prompt('Name', 'Please enter a name for the new business process:', function(btn, text) {
    		if(btn == 'ok'){
            	//console.log(text);
            	Ext.getStore('MenuStore').add({name: text});
            	Ext.getStore('MenuStore').sync();
         	}
		});
    	
    	
    },
    
    onDescBtnTap: function(){
    	var selectedItem = this.getMenu().getSelection(); 
    	
    	//console.log(selectedItem[0].getSelectedName());
    	console.log('DescButton tapped');
    	this.getScenarioOutlineTitleBar().setTitle(selectedItem[0].getSelectedName());
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
    
    
    onBBSOutlineActiveitemchange:function(container, newActivePanel, oldPanel){
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
    
    //Test
});