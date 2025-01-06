const Chai = require('chai');
const Node = require('../src/Node.js');

const expect = Chai.expect;

describe('Node', function () {
    it('should have a value field', function () {
        let node = new Node(10, null);

        expect(node).to.have.property('value', 10);
    });

    it('should have a next field', function () {
        let next = new Node(20);
        let node = new Node(10, next);

        expect(node).to.have.property('next', next);
    });

    it('should default next to null', function () {
        let node = new Node(10);

        expect(node).to.have.property('next', null);
    });
});