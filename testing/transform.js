/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */
const babelOptions = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins: ['require-context-hook', 'react-hot-loader/babel', '@babel/plugin-proposal-class-properties']
};

module.exports = require('babel-jest').createTransformer(babelOptions);
