module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/adzhigitovruslan.github.io/'
    : '/',
	chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
	css: {
	loaderOptions: {
		sass: {
		prependData: `@import "@/assets/scss/null.scss";`
		}
	}
	}
  };