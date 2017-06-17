module.exports = {
    /* Points to the main application module */
    entry: [
        './source/App.js'
    ],
    /* Tells webpack where to save the single JavaScript file containing all
     *  the modules packed in the correct order */
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    /* Pass all .js files through babel, the JS compiler that transforms all JSX
     * into plain JavaScript Code */
    module: {
        loaders: [{
             test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                 'presets': ['es2015', 'react']
            }
        }]
    }
};