const path = require('path');

const reactRule = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ]
        }
    }
};

const cssRule = {
    test: /\.s?css/,
    use: [
        'style-loader',
        'css-loader'
    ]
};

const webpackConfig = {
    entry: path.join(__dirname, 'src', 'index.js'),
    mode: 'development',
    module: {
        rules: [
            reactRule, cssRule
        ]
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'react-reflex-grid',
        umdNamedDefine: true
    }
};

module.exports = webpackConfig;
