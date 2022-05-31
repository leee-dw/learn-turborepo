const withTM = require('next-transpile-modules')(['gongbiz-design-system'])

module.exports = withTM({
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
})
