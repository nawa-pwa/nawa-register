const path = require('path');
const Uglifyjs = require('uglifyjs-webpack-plugin');


const COMPILE = (process.env.NODE_ENV === 'compile');

let config = {
    devtool: 'hidden-source-map',
    entry: {
        'nawa-register': path.join(__dirname,'./src/index'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    "plugins": [
                        ["transform-decorators-legacy"],
                      ]
                }
            }]
        }]
    },
    plugins:[
    ]

}


module.exports = config;