/**
 * Test setup for client-side tests.
 *
 * Intended for:
 * - Karma tests: `builder run test-frontend`
 * - Browser tests: `http://localhost:3000/test/client/test.html`
 */
const chai = require('chai');
const sinonChai = require('sinon-chai');

// --------------------------------------------------------------------------
// Chai / Sinon / Mocha configuration.
// --------------------------------------------------------------------------
// Exports
window.expect = chai.expect;

// Plugins
chai.use(sinonChai);

// Mocha (part of static include).
window.mocha.setup({
  ui: 'bdd',
  bail: false
});

// --------------------------------------------------------------------------
// Bootstrap
// --------------------------------------------------------------------------
// Use webpack to include all app code _except_ the entry point so we can get
// code coverage in the bundle, whether tested or not.
// TODO: This doesn't seem to work.
const srcReq = require.context('../../src', true, /\.js$/);
srcReq.keys().map(srcReq);

// Use webpack to infer and `require` tests automatically.
const testsReq = require.context('../../src', true, /\.test.js$/);
testsReq.keys().map(testsReq);

// Only start mocha in browser.
if (!window.__karma__) {
  window.mocha.run();
}