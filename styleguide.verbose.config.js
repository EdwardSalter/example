module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	logger: {
 		warn: console.warn,
 		info: console.log,
 		debug: console.log,
 	},
	components: './lib/components/**/[A-Z]*.js',
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: [/node_modules/, /components\\BabelIgnored/],
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader?modules&importLoaders=1',
				}
			]
		}
	},
	verbose: true
};
