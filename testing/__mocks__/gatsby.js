/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */
const MockComponent = require('../MockComponent').default;

const gatsby = jest.requireActual('gatsby');

module.exports = { ...gatsby, graphql: jest.fn(() => ('My Query')), Link: MockComponent };
