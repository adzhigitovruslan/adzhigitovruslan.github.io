module.exports = {
	publicPath: '/countries-api/',
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