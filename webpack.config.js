module.exports = {
    entry: './src/app.js', // you can use __dirname or fs module to create path
    output: {
        filename: "./out.js"
    },
    watch: true,
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
        ]
    },
}
