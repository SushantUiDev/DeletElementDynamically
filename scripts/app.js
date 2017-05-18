(function(){
	angular.module("helloApp",[]);
	
	angular.module("helloApp")
	.config(function(){
		console.log("i am app module config...");
	})
	.run(function(){
		console.log("i am app module run... ");
	})
})();