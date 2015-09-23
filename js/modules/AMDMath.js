define( [], function() {
	var math = {};
	math.add = function(){
		var output = 0;
		if(arguments.length === 1) {
			output = arguments[0];
		}
		else if(arguments.length > 1 ) {
			for(var i=0;i<arguments[i];i=i+1){
				output = output + arguments[i];
			}
		}
		return output;
	}
	return math;
});