var lg = require('../../../chapter1/section1/src/1.1.14');
var expect = require('chai').expect;

describe('1.1.14的测试', function () {
	it('1.1.14的测试', function () {
		expect(lg(5)).to.be.equal(2);
		expect(lg(16)).to.be.equal(4);
	});
});
