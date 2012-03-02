Ext.define({'MyApp.profile.Tablet',{
    extend: 'Ext.app.Profile',
    
    config:{
        //controllers:[],
        //views: []
    }, 
    
    isActive: function() {
        return Ext.os.is.Tablet;
    }
    
}

});

