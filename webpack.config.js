const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js', // you can use __dirname or fs module to create path
    output: {
        filename: './out.js',
    },
    watch: true,
    devtool: 'inline-source-map', // more info: https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/
    module: {
        loaders: [
            {
                test: /\.js$/, // searching .js files
                exclude: /node_modules/, // don't search in node_modules
                loader: 'babel-loader', // loader name
                query: {
                    presets: ['es2015'] // set source type
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'], // first load css file then add style tag to html
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader'], // first read scss file
            }
        ],

        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('./style.css'),
    ]
}
