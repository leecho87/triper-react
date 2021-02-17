const CracoAlias = require("craco-alias");

module.exports = {
  style: {
    modules: {
      localIdentName: "",
    },
    css: {
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        return cssLoaderOptions;
      },
    },
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        return sassLoaderOptions;
      },
    },
    postcss: {
      mode: "extends" || "file",
      plugins: [],
      env: {
        autoprefixer: {},
        stage: 3,
        features: {},
      },
      loaderOptions: (postcssLoaderOptions, { env, paths }) => {
        return postcssLoaderOptions;
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: "./src",
        source: "tsconfig",
        tsConfigPath: "tsconfig.paths.json",
      },
    },
  ],
};
