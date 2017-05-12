module.exports = {
    entry: './02-deep-in-components/homework/HomeWork01.js',
    output: {
        library: 'dd',
        filename: './02-deep-in-components/homework/build_01.js'
    },
    
    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },
    plugins: [ ],
    devtool: 'source-map',
    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
