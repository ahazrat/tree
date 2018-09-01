const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'styles.css'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js',
        // publicPath: '/assets/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                    // presets: ['react','es2015']
                }
                // use: [
                //     {
                //         loader: 'babel-loader',
                //         options: {
                //             presets: ['react']
                //         }
                //     }
                // ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader','sass-loader']   
                })
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
        ],
        loaders: [
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loader: 'babel-loader',
        //         query: {
        //             presets: ['es2015']
        //         }
        //     }
        ],
    },
    plugins: [
        extractPlugin
    ]
};