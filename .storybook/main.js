const path = require('path');

module.exports = {
    "stories": [
        "../src/stories/**/*.@(js|jsx|ts|tsx|mdx)",
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        '@storybook/addon-knobs/register',
        '@storybook/addon-controls',
    ],
    webpackFinal: async config => {
        // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
        config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
        // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
        config.module.rules[0].use[0].loader = require.resolve("babel-loader");
        // use @babel/preset-react for JSX and env (instead of staged presets)
        config.module.rules[0].use[0].options.presets = [
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-env"),
        ];
        config.module.rules[0].use[0].options.plugins = [
            // use @babel/plugin-proposal-class-properties for class arrow functions
            require.resolve("@babel/plugin-proposal-class-properties"),
            // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
            require.resolve("babel-plugin-remove-graphql-queries"),
        ];
        // Prefer Gatsby ES6 entry point (module) over commonjs (main) entry point.
        config.resolve.mainFields = ["browser", "module", "main"];

        // use our own postcss-loader
        const cssRule = config.module.rules.find(rule =>
        'test.css'.match(rule.test),
        )
        // Which loader in this rule mentions the custom Storybook postcss-loader?
        const loaderIndex = cssRule.use.findIndex(loader => {
        // Loaders can be strings or objects
        const loaderString = typeof loader === 'string' ? loader : loader.loader
            // Find the first mention of "postcss-loader", it may be in a string like:
            // "@storybook/core/node_modules/postcss-loader"
            return loaderString.includes('postcss-loader')
        })
        // Simple loader string form, removes the obsolete "options" key
        cssRule.use[loaderIndex] = 'postcss-loader'

        return config;
    },
};
