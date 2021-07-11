/**
 * This setup allows to use enzyme with react 17. Currently, there is no official support
 * by enzyme to react 17 [#2430](https://github.com/enzymejs/enzyme/pull/2430)
 */
const Enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({ adapter: new Adapter() });
