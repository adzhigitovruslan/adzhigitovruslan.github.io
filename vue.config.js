module.exports = {
	publicPath: '/adzhigitovruslan.github.io/',
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