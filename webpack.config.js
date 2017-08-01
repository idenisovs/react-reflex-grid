const path = require('path');

module.exports = {
    entry: './react-reflex-grid.js',
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'react-reflex-grid.js',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react'] } },
            { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' }
        ]
    }
};
