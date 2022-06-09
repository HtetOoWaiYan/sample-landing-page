const CracoLessPlugin = require('craco-less');

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: { 
							'@primary-color': '@purple-5', 
							'@heading-colors': '#262626',
							'@text-color': '#595959'
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};