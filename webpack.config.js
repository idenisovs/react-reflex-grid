const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './react-reflex-grid.js',
    
    output: {
        path: './dist',
        filename: 'react-reflex-grid.js'
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react'] } },
            { test: /\.s?css$/, loader: 'style-loader!css-loader?modules!sass-loader' }
        ]
    },

    postcss: [
        autoprefixer({
            browsers: ['IE 10', 'last 2 versions']
        })
    ]
};
