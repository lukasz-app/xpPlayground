import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    plugins: [ new webpack.NormalModuleReplacementPlugin(
        /mobx-react\/native/,
        "mobx-react"
    ),new webpack.NormalModuleReplacementPlugin(
        /mobx-react\/native/,
        "mobx-react"
    )],
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader",
                query: {
                    presets: ['es2015', 'react'],
                  }
            },
        ]
    }
};

export default config;
