const path = require('path');

const reactLoader = { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react'] } };
const scssLoader = { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' };

const fileName = 'index.js';
const entryPoint = path.join(__dirname, 'src', fileName);
const outputDir = path.resolve(__dirname, 'lib');

const config  = {
    entry: entryPoint,
    module: {
        loaders: [ reactLoader, scssLoader ]
    },
    output: {
        path: outputDir,
        filename: fileName,
        libraryTarget: 'umd',
        library: 'ReactReflexGrid',
        umdNamedDefine: true
    }
};

module.exports = config;
