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
        ]
}
