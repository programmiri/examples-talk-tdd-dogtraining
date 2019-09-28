module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current"
				},
				useBuiltIns: false
			}
		]
	],
	plugins: [
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-proposal-private-methods"
	]
};
