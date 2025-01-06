const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Chai = require('chai');
const LinkedList = require('../src/LinkedList.js');

const expect = Chai.expect;
Chai.use(sinonChai);

describe('LinkedList', function () {
    let linkedList;

    beforeEach(function () {
        linkedList = new LinkedList();
    });

    it('should not print anything for an empty list', function () {
        const log = sinon.fake();

        linkedList.print(log);

        expect(log).to.not.have.been.called;
    });

    it('should print list in proper order', function () {
        const log = sinon.fake();

        linkedList.append(5);
        linkedList.append(10);
        linkedList.prepend(3);

        linkedList.print(log);

        expect(log.callCount).to.equal(3);
        expect(log.getCall(0).args[0]).to.equal(3);
        expect(log.getCall(1).args[0]).to.equal(5);
        expect(log.getCall(2).args[0]).to.equal(10);
    });

    it('should print list in proper order', function () {
        const log = sinon.fake();

        linkedList.prepend(5);
        linkedList.prepend(10);
        linkedList.append(3);

        linkedList.print();

        expect(log.callCount).to.equal(3);
        expect(log.getCall(0).args[0]).to.equal(10);
        expect(log.getCall(1).args[0]).to.equal(5);
        expect(log.getCall(2).args[0]).to.equal(3);
    });

    it('should accurately prepend on an empty list', function () {
        linkedList.prepend(10);

        expect(linkedList.head).to.not.be.null;
        expect(linkedList.head.value).to.equal(10);
        expect(linkedList.head.next).to.be.null;
    });

    it('should accurately prepend on a non-empty list', function () {
        linkedList.prepend(5);
        linkedList.prepend(10);
        linkedList.prepend(15);

        expect(linkedList.head).to.not.be.null;
        expect(linkedList.head.value).to.equal(15);
        expect(linkedList.head.next).to.not.be.null;
        expect(linkedList.head.next.value).to.equal(10);
        expect(linkedList.head.next.next).to.not.be.null;
        expect(linkedList.head.next.next.value).to.equal(5);
        expect(linkedList.head.next.next.next).to.be.null;
    });

    it('should accurately append on an empty list', function () {
        linkedList.append(10);

        expect(linkedList.head).to.not.be.null;
        expect(linkedList.head.value).to.equal(10);
        expect(linkedList.head.next).to.be.null;
    });

    it('should accurately append on a non-empty list', function () {
        linkedList.append(5);
        linkedList.append(10);
        linkedList.append(15);

        expect(linkedList.head).to.not.be.null;
        expect(linkedList.head.value).to.equal(5);
        expect(linkedList.head.next).to.not.be.null;
        expect(linkedList.head.next.value).to.equal(10);
        expect(linkedList.head.next.next).to.not.be.null;
        expect(linkedList.head.next.next.value).to.equal(15);
        expect(linkedList.head.next.next.next).to.be.null;
    });
});