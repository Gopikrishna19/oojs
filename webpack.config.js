module.exports = {
    entry: [
        './class'
    ],
    output: {
        filename: 'class.es5.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader'
            }
        ]
    }
}
