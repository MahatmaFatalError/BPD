Ext.define('MyApp.model.Menu', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'name'
            },
            {
            	name: 'desc'
            }
        ],
    
    
    	// ==> BelongsTo Association
    	//belongsTo:[{},{}],
    
    
   		// ==> HasOne oder HasMany Association
    	//hasMany:{}
    
    
    },
    
    getSelectedName: function(){
    	var temp = this.data,
    	item = [temp.name];
    	
    	return item;
    },
    
    getSelectedDesc: function(){
    	var temp = this.data,
    	item = [temp.desc];
    	
    	return item;
    
    }
    
});