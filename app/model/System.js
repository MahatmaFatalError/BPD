Ext.define('MyApp.model.System', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'name'
            },
            {
				name: 'hostName'
			},
			{
				name: 'projectName'
			},
			{
				name: 'password'
            }
        ]
    }
});