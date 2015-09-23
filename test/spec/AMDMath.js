define(["../../js/modules/AMDMath"], function(math) {
	describe("math module", function(){
		var mathInstance = math;
		it('add should work with zero or no arguments', function() {
	        expect(mathInstance.add()).to.equal(0);
	    });
	    it('add should work with one argument', function() {
	        expect(mathInstance.add(5)).to.equal(5);
	    });
	    it('add should work with more than one argument', function() {
	        expect(mathInstance.add(5,10,15)).to.equal(30);
	    });
	    it('add should work with negative values', function() {
	        expect(mathInstance.add(-1)).to.equal(-1);
	    });
	});
});
