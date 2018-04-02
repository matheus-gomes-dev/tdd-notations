const webpack = require('webpack');
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
    devtool: 'source-map', //ferramenta para viabilizar debug após minificação
    entry: {
        filename: './app.js'
    },
    output: {
        filename: './build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }
        ]
    },
    plugins: [ //minificar output
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
        })
    ]
}