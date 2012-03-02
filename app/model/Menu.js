Ext.define('MyApp.model.Menu', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'name'
            }
        ],
    
    
    	// ==> BelongsTo Association
    	//belongsTo:[{},{}],
    
    
   		// ==> HasOne oder HasMany Association
    	//hasMany:{}
    
    
    },
    
    //getSelectedItem: function(){
    //	return this.data.name;
    //}
});